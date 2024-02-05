export interface MachineType {
    name: string;
    type: number;
    icon: string;
}

export interface MachineLineConfig {
    machines: MachineType[];
}
