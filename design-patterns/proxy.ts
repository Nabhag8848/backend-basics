interface CommClassroom {
    name:string;
    prizeOfEvent:string | null;
}

const lead:CommClassroom = {
    name: 'Kunal Kushwaha',
    prizeOfEvent: null // so can update in website
}

const communityManager:CommClassroom = new Proxy(lead, {
    get:(obj:CommClassroom, property:string) => {
        if(obj[property as keyof CommClassroom] == null){
            console.log(`Will let you know Kaiwalya!`);
        }else {
            console.log(`Prize for the event is ${Reflect.get(obj,property)} this month!`);
        }
    }, 

    set:(obj:CommClassroom, property:string, value:string | null) => {
        Reflect.set(obj, property, value);
        console.log(`Prize for this month is set to ${obj[property as keyof CommClassroom]}`);
        return true;
    }
})

communityManager.prizeOfEvent
communityManager.prizeOfEvent = 'G-Shock'
communityManager.prizeOfEvent



