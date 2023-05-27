import React from 'react'
import { GetServerSideProps } from 'next';
//types
import { GameType } from '../game/type';

const GameInfo = () => {
    return (
        <div>gameInfo</div>
    )
}

export default GameInfo;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let response: {
        status: string;
        message: string;
        data: GameType;
    } | null = null;
    if (query?.path) {
        let id = undefined;
        if (typeof query.path === typeof {}) {
            id = query.path[0];
        } else {
            id = query.path;
        }
        try {
            console.log("env url", process?.env?.BACKEND_HOST_URL);
            const res = await fetch(
                `https://devstage.turftown.in/api/v2/game/share/${id}`
            );
            console.log("res", res);
            response = await res.json();
            console.log("response", response);
        } catch (error) {
            console.log("error", error);
            response = null;
        }
    }

    return {
        props: {
            game: response?.data ? response.data : null,
        },
    };
};