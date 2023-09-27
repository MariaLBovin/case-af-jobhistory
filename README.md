# About Arbetsgivardata

## Background
Arbetsförmedlingen has opened up its extensive databases of job advertisements and job postings that have been published over an extended period. This data source is of significant value for various purposes, including gaining insights into the job market, analyzing trends, and developing applications that can assist job seekers and employers.

## Project Overview
In this project, we use Arbetsförmedlingen's Historical Job Ads API to search for job postings published by a specific employer within a specified time frame. The aim is to create a useful application that can filter and present relevant job ads for both students and professionals. 

## Project Specifications

### Searching for Job Ads
We use the API's endpoint, historical.api.jobtechdev.se/search, to search for job ads published by a specific employer within a given time interval. To achieve this, we make use of request parameters for publication date and employer.

### Pagination
We retrieve a maximum of 2100 ads and employ pagination and result filtering to present them in an easily accessible and clear manner.

### Presentation
The results are presented as a list. To learn more about a specific ad, one can click on the selected ad. From the ad, you can then return to the result list.

## Arbetsgivardata 2.0
Here are some suggestions for what could be done as version 2.0:
* Add a route for statistics where users can, among other things, compare the employer's job advertisements per year with the industry's average for the same year to see how the company compares to its surroundings.
* Adding more employers to the search to compare the number of job advertisements against each other.
* Sort results by relevance.
* Establish uniform naming of variables







