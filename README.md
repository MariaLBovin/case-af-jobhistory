# About Arbetsgivardata

## Background
Arbetsförmedlingen has opened up its extensive databases of job advertisements and job postings that have been published over an extended period. This data source is of significant value and utility for various purposes, including gaining insights into the job market, analyzing trends, and developing applications that can assist job seekers and employers.

## Project Overview
In this project, we utilize Arbetsförmedlingen's Historical Job Ads API to search for job postings published by a specific employer within a specified time frame. The aim is to create a useful application that can filter and present relevant job ads for both students and professionals. 

## Project Specifications

### Searching for Job Ads
We use the API's endpoint, historical.api.jobtechdev.se/search, to search for job ads published by a specific employer within a given time interval. To achieve this, we make use of request parameters for publication date and employer.

### Pagination
We retrieve a total of 100 ads and employ pagination and result filtering to present them in an easily accessible and clear manner.

### Presentation
The results are presented as a list. To learn more about a specific ad, one can click on the selected ad. From the ad, you can then return to the result list.


