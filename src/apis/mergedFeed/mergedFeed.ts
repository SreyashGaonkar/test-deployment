

import AxiosInstance, { UnAuthorizedError, axiosConfig, getAxiosConfig } from "@/instance/instance";

export interface mergedFeedBody {
    lastPost: null;
    skip: number;
    public_skip: number;
    limit: number;
    date: null;
    sport: null;
    time: null;
}
export interface mergedFeedResponse {
    data: {
        status: string;
        message: string;
        data: feedData;
    }
}

export interface feedData {
    feed: {
        data: any[];
    };
    public_feed: {
        data: any[];
    }
};


export interface error {
    status: string; // "failure",
    errors: {
        otp: string; // "incorrect otp"
    }
}


export const mergedFeed = async (
    body: mergedFeedBody,
): Promise<feedData> => {
    try {
        const data = JSON.stringify(body);
        const response: mergedFeedResponse = await AxiosInstance.post(
            'v2/feed/merged',
            data,
            getAxiosConfig(true),
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};
