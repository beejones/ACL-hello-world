// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/*
 * Hearthbeat returns 200 when running
 *
 * @param request - The request object.
 * @returns A heartbeat string
 */
export const heartbeat = () => {

    const response = {
        status: 200,
        body: 'I am alive!'
    }
    return response;
};