---
endpoint: https://api.krr.triply.cc/datasets/wbeek/50K/containers/1GB/sparql
layout: story
logo: /stories/sp2b/logo.png
output: gchart
title: SP2B
---

# SP<sup>2</sup>B

Running the <a
href="http://dbis.informatik.uni-freiburg.de/index.php?project=SP2B/queries.php">SP<sup>2</sup>B
SPARQL benchmark</a> over 50K triples with a 1GB Virtuoso endpoint.

## Q1: Return the year of publication of “Journal 1 (1940)”

This simple query returns exactly one result (for arbitrarily large
documents).  Native engines might use index lookups in order to answer
this query in (almost) constant time, i.e. execution time should be
independent from document size.

Expected number of results: 1.

<div data-query data-query-sparql="sp2b_q1.rq" data-query-output="table"></div>

## Q2: Extract all inproceedings with various properties

Extract all inproceedings with properties `dc:creator`,
`bench:booktitle`, `dcterms:issued`, `dcterms:partOf`, `rdfs:seeAlso`,
`dc:title`, `swrc:pages`, `foaf:homepage`, and optionally
`bench:abstract`, including their values.

This query implements a bushy graph pattern.  It contains a single,
simple `optional` expression, and accesses large strings (i.e. the
abstracts).  Result size grows with database size, and a final result
ordering is necessary due to operator `order by`.  Both native and
in-memory engines might reach evaluation times that are almost linear
to the document size.

Expected number of results: 965.

<div data-query data-query-sparql="sp2b_q2.rq"></div>

## Q3a: Select all articles with property `swrc:pages`

This query tests `filter` expressions with varying selectivity.
According to Table I, the `filter` expression is not very selective
(i.e. retains about 92.61% of all articles).  Data access through a
secondary index is probably not very efficient.

Expected number of results: 3,637.

<div data-query data-query-sparql="sp2b_q3a.rq"></div>

## Q3b: Select all articles with property `swrc:month`

This query tests `filter` expressions with varying selectivity.  Data
access through a secondary index might work well for this query, which
selects only 0.65% of all articles.

Expected number of results: 25.

<div data-query data-query-sparql="sp2b_q3b.rq"></div>

## Q3c: Select all articles with property `swrc:isbn`

This query tests `filter` expressions with varying selectivity.  The
filter condition in this query is never satisfied, as no articles have
`swrc:isbn` predicates.  Schema statistics might be used to answer
this query in constant time.

Expected number of results: 0.

<div data-query data-query-sparql="sp2b_q3c.rq" data-query-output="table"></div>

## Q4: Select all distinct pairs of article author names for authors that have published in the same journal.

This query contains a rather long graph chain, i.e. variables `?name1`
and `?name2` are linked through the articles the authors have
published, and a common journal.  The result is very large, basically
quadratic in number and size of journals.  Instead of evaluating the
outer pattern block and applying the `filter` afterwards, engines
might embed the `filter` expression in the computation of the block,
e.g. by exploiting indices on author names.  The `distinct` modifier
further complicates the query.  We expect superlinear behavior, even
for native engines.

Expected number of results: 104,746.

<div data-query data-query-sparql="sp2b_q4.rq"></div>

## Q5a: Return the names of all persons that occur as author of at least one inproceeding and at least one article

This query implements an implicit join on author names, which is
encoded in the `filter` condition.  The one-to-one mapping between
authors and their names (i.e. author names constitute primary keys) in
our scenario implies equivalence with query SP²B5b.  In [14], semantic
optimization on top of such keys for RDF has been proposed.  Such an
approach might detect the equivalence of both queries in this scenario
and select the more efficient variant.

Expected number of results: 1,085.

<div data-query data-query-sparql="sp2b_q5a.rq"></div>

## Q5b: Return the names of all persons that occur as author of at least one inproceeding and at least one article.

This query explicitly joins the authors on variable name.  The
one-to-one mapping between authors and their names (i.e. author names
constitute primary keys) in our scenario implies equivalence with
query SP²B5a.  In [14], semantic optimization on top of such keys for
RDF has been proposed.  Such an approach might detect the equivalence
of both queries in this scenario and select the more efficient
variant.

Expected number of results: 1,085.

<div data-query data-query-sparql="sp2b_q5b.rq"></div>

## Q6: Return, for each year, the set of all publications authored by persons that have not published in years before

This query implements closed world negation (CWN), expressed through a
combination of operators `optional`, `filter`, and `bound`.  The idea
of the construction is that the block outside the `optional`
expression computes all publications, while the inner one constitutes
earlier publications from authors that appear outside.  The outer
`filter` expression then retains publications for which `?author2` is
unbound, i.e. exactly the publications of authors without publications
in earlier years.

Expected number of results: 1,769.

<div data-query data-query-sparql="sp2b_q6.rq"></div>

## Q7: Return the titles of all papers that have been cited at least once, but not by any paper that has not been cited itself

This query tests double negation, which requires nested CWN.
Recalling that the citation system of DBLP is rather incomplete
(cf. Section III-D), we expect only few results.  Though, the query is
challenging due to the double negation.  Engines might reuse graph
pattern results, for instance, the block `?class[i] rdf:type
foaf:Document. ?doc[i] rdf:type ?class[i].` occurs three times, for
empty [i], [i]=3, and [i]=4.

Expected number of results: 2.

<div data-query data-query-sparql="sp2b_q7.rq" data-query-output="table"></div>

## Q8: Compute authors that have published with Paul Erdös or with an author that has published with Paul Erdös

Here, the evaluation of the second `union` part is basically
“contained” in the evaluation of the first part.  Hence, techniques
like graph pattern (or subexpression) reusing might apply.  Another
very promising optimization approach is to decompose the filter
expressions and push down its components, in order to decrease the
size of intermediate results.

Expected number of results: 264.

<div data-query data-query-sparql="sp2b_q8.rq"></div>

## Q9: Return incoming and outgoing properties of persons

This query has been designed to test non-standard data access
patterns.  Naive implementations would compute the triple patterns of
the `union` subexpressions separately, thus evaluate patterns where no
component is bound.  Then, pattern `?subject ?predicate ?person` would
select all graph triples, which is rather inefficient.  Another idea
is to evaluate the first triple in each `union` subexpression,
afterwards using the bindings for variable `?person` to evaluate the
second patterns more efficiently.  In this case, we observe patterns
where only the subject (resp. the object) is bound.  Also observe that
this query extracts schema information.  The result size is exactly 4
(for sufficiently large documents).  Statistics about
incoming/outgoing properties of Person-typed objects in native engines
might be used to answer this query in constant time, even without data
access.  In-memory engines always must load the document, hence might
scale linearly to document size.

Expected number of results: 4.

<div data-query data-query-sparql="sp2b_q9.rq" data-query-output="table"></div>

## Q10

Expected number of results: 307.

<div data-query data-query-sparql="sp2b_q10.rq"></div>

## Q11: Return (up to) 10 electronic edition URLs starting from the 51th publication, in lexicographical order

This query focuses on the combination of solution modifiers `order
by`, `limit`, and `offset`.  In-memory engines have to read, process,
and sort electronic editions prior to processing `limit` and `offset`.
In contrast, native engines might exploit indices to access only a
fraction of all electronic editions and, as the result is limited to
10, reach constant runtimes.

Expected number of results: 10.

<div data-query data-query-sparql="sp2b_q11.rq" data-query-output="table"></div>

## Q12a: Return ✓ if a person occurs as author of at least one inproceeding and article, ❌ otherwise

This query shares the properties of its `select` counterpart SP²B5a.
It always returns ✓ for sufficiently large documents.  When evaluating
such `ask` queries, engines should break as soon a solution has been
found.  They might adapt the QEP, to efficiently locate a witness.
For instance, based on execution time estimations it might be
favorable to evaluate the second part of the `union` in SP²B12b first.
Both native and in-memory engines should answer these queries very
fast, independent from document size.

Expected result: ✓.

<div data-query data-query-sparql="sp2b_q12a.rq"></div>

## Q12b: Return ✓ if an author has published with Paul Erdös or with an author that has published with “Paul Erdös”, and ❌ otherwise

This query shares the properties of its `select` counterpart SP²B8.
It always returns ✓ for sufficiently large documents.  When evaluating
such `ask` queries, engines should break as soon a solution has been
found.  They might adapt the QEP, to efficiently locate a witness.
For instance, based on execution time estimations it might be
favorable to evaluate the second part of the `union` in SP²B12b first.
Both native and in-memory engines should answer these queries very
fast, independent from document size.

Expected result: ✓.

<div data-query data-query-sparql="sp2b_q12b.rq"></div>

## Q12c: Return ✓ if person “John Q. Public” is present in the database

Asks for a single triple that is not present in the database.  With
indices, native engines might execute this query in constant time.
Again, in-memory engines must scan (and hence, load) the whole
document.

Expected result: ❌.

<div data-query data-query-sparql="sp2b_q12c.rq"></div>
