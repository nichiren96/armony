export class Room {

    constructor(
        public room_number: string, 
        public room_phone: string,
        public room_capacity: number,
        public room_beds: number,
        public hotel_id: string, 
        public category_id: string, ) {

        
    }
}