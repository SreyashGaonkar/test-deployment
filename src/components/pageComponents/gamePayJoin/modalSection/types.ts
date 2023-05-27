import { RatingReviews } from "@/routes/venue/types";

export enum ModalType {
    NONE,
    GAME_FULL,
    RETRY,
    TIME_OUT,
    SPOT_UNAVAILABE,
    SERVICE_FEE,
    JOIN_WAIT_LIST
}

export interface ModalSectionPropType {
    modalType: ModalType;
    onClose: () => void;
    onAccept: () => void;
    onCancel: () => void;
    onTrack: () => void;
}