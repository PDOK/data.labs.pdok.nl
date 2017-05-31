---
layout: presentation
title: Linking BAG addresses to BRK parcels
---

<section data-markdown>

# Linking BAG and BRK

- Where is it?
- How did the linkset come about?
- What is linked?
- What predicate is used?
</section>


<section data-markdown>

# Provenance
## Who did what @Kadaster:
- Ad van Houtum (advisor product & process innovation)
- Ronald Peeters (sr. test & quality consultant)
- Tijn van Bussel (advisor operational information management)
- Peter Schepens (sr. DBA)
- Erwin Folmer (sr. advisor PPB)
- Rein van 't Veer (spatial & linked data engineer)
</section>

<section data-markdown>

# Provenance

What [ingredients](https://github.com/PDOK/data.labs.pdok.nl/tree/master/data/bag-brk) were used?
</section>

<section data-markdown>

# Results

- [Graph](https://data.labs.pdok.nl/linksets/id/linksets/bag_brk_kennemerland) with data and metadata
- Uses dcterms:related derived (rdfs:subPropertyOf) [link predicate](http://data.labs.pdok.nl/linksets/def/bag_brk_kennemerland#relatedParcel)
- 248,951 [links](http://ec2-34-252-124-184.eu-west-1.compute.amazonaws.com:8443/resource?uri=http:%2F%2Fdata.labs.pdok.nl%2Flinksets%2Fid%2Flinksets%2Fbag_brk_kennemerland&role=context) for Kennemerland
- Some dropouts due to the difference in link table versus dataset version: 5031 misses (2.02%)
- 24552 duplicate entries due to 'apartment rights' lookups (not detrimental to quality)
</section>

