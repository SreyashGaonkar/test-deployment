
export interface TabbarProps {
    selectedTab: number;
    tabNames: string[];
    onClick: (tab: number) => void;
}