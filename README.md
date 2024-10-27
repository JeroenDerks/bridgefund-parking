Welcome to the coding challenge for Jeroen Derks.

The goal for this assingment was to cover all criteria and show my technical abilities. Therefore design and UX have received less attention.

For full transparency, criteria PBF-04.2 is not fully inplemented. The requirement states:

```
Allow the operator to filter by the most important fields of the sessions: session type (resident, non-resident car, non-resident motorbike), start date, end date, session status (active/inactive).
```

However, the session type filtering (resident, non-resident car, non-resident motorbike) can only be done in the FE because the BE does not allow for filtering by `parkingSpaceId`. Since the backend allows for filtering by `vehicleType`, this has been implemented instead of the session type.

## Getting Started

Install the dependencies using `npm i` and run the application locally using `npm run dev`.

## Next steps

If there was more time, I would work on the following:

1. Add pagination to table
2. Add loading state to parking session table
3. Add empty state for table
4. Add refreshing of `accessToken` when expiry date approaches
5. Add debounce for date switching to prevent calls when month changes
6. Fix revalidation of cached data
7. Add UI for starting new parking sessions

## Questions:

1. How is occupancy calculated? I don't understand how the 3 `parkingSpaces` relate to the parking sessions.
