import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "./data/scenario.JSON"};

class DataLoader{
    static async set(path){
        return fetch(path, {
            headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then((response) => response.json())
        .then((data) => LocalStorageService.set(LS_KEYS.SCENARIO, data))
        .catch(() => alert("Sorry, services dosn`t work"))
    }
}

export { DataLoader, DATA_URL }