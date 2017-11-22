---
layout: story
title: SP2B
endpoint: https://api.krr.triply.cc/datasets/wbeek/100K/containers/1GB/sparql
---

# SP2B

## Q1: Return the year of publication of “Journal 1 (1940)”

This simple query returns exactly one result (for arbitrarily large
documents).  Native engines might use index lookups in order to answer
this query in (almost) constant time, i.e. execution time should be
independent from document size.

<div data-query data-query-sparql="sp2b_q1.rq"></div>

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

<div data-query data-query-sparql="sp2b_q2.rq"></div>

## Q3a: Select all articles with property `swrc:pages`

This query tests `filter` expressions with varying selectivity.
According to Table I, the `filter` expression is not very selective
(i.e. retains about 92.61% of all articles).  Data access through a
secondary index is probably not very efficient.

<div data-query data-query-sparql="sp2b_q3a.rq"></div>

## Q3b

<div data-query data-query-sparql="sp2b_q3b.rq"></div>

## Q3c

<div data-query data-query-sparql="sp2b_q3c.rq"></div>

## Q4

<div data-query data-query-sparql="sp2b_q4.rq"></div>

## Q5a

<div data-query data-query-sparql="sp2b_q5a.rq"></div>

## Q5b

<div data-query data-query-sparql="sp2b_q5b.rq"></div>

## Q6

<div data-query data-query-sparql="sp2b_q6.rq"></div>

## Q7

<div data-query data-query-sparql="sp2b_q7.rq"></div>

## Q8

<div data-query data-query-sparql="sp2b_q8.rq"></div>

## Q9

<div data-query data-query-sparql="sp2b_q9.rq"></div>

## Q10

<div data-query data-query-sparql="sp2b_q10.rq"></div>

## Q11

<div data-query data-query-sparql="sp2b_q11.rq"></div>

## Q12a

<div data-query data-query-sparql="sp2b_q12a.rq"></div>

## Q12b

<div data-query data-query-sparql="sp2b_q12b.rq"></div>

## Q12c

<div data-query data-query-sparql="sp2b_q12c.rq"></div>
