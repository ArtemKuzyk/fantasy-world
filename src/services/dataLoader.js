import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "data/scenario.JSON",
                  /*GIT_PATH: "https://artemkuzyk.github.io/example-react-app/data-base/book.JSON"*/};

class DataLoader{
    static async set(path){
        return fetch(path)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            LocalStorageService.set(LS_KEYS.SCENARIO, data);
        })
        .catch(() => alert("Sorry, services dosn`t work"))
    }
}

export { DataLoader, DATA_URL }