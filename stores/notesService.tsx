import * as URLS from '../general/URLS';

class notesService {

    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request(URLS.NOTES_API, options);
        const response = await fetch(request);
        return response.json();
    }

    post = async (note) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(note)
        }
        const request = new Request(URLS.NOTES_API, options);
        const response = await fetch(request);
        return response;
    }

    delete = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = {
            method: "DELETE",
            headers
        }
        const request = new Request(URLS.NOTES_API + "?_id=" + id, options);
        const response = await fetch(request);
        return response;
    }

}

export default notesService;