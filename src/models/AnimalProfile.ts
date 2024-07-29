export default interface AnimalProfile {
    name: string;
    description: string;
    intervalHours: number;
    activeTimes: {
        recurrence: "weekly";
        weekday: string;  
        time: string;    
    }[];
    instructions: string[];  
}