export interface NamePropType {
    name?: string;
    token: string;
    id?: string;
    next: (name?: string) => void;
    back: () => void;
}