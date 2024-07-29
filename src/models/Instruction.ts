export default interface Instruction {
    id: string;
    type: "Feeding";  
    description: string;
    steps: {
        description: string;
        completed: boolean;
    }[];
}