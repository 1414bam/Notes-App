import { observable, action, computed, reaction, decorate, runInAction } from "mobx"
import { createContext } from 'react'
import notesService from './notesService'

export interface Item {
    _id?: string;
    text: string;
    isChecked: boolean;
}
export interface Note {
    _id?: string;
    name: string;
    itemsList: Item[];
    createdAt: string,
    updatedAt: string
}

class NoteStore {
    @observable notes: Note[] = [];
    @observable fetchStatus = "initial";
    @observable postStatus = "initial";
    @observable deleteStatus = "initial";
    @observable fetchIsLoading = false;
    @observable postIsLoading = false;
    @observable deleteIsLoading = false;
    notesService: notesService = null;

    constructor() {
        this.notesService = new notesService();
    }

    @action fetchNotes = async () => {
        try {
            this.fetchIsLoading = true;
            this.fetchStatus = 'initial'
            const data = await this.notesService.get();
            runInAction(() => {
                this.notes = data;
                this.fetchIsLoading = false;
            });
            
        } catch (error) {
            runInAction(() => {
                this.fetchStatus = "error";
                this.fetchIsLoading = false;
            });
        }
    };
    
    
    @action  postNote = async (note) => {
        try {
            this.postIsLoading = true;
            this.postStatus = 'initial'
            const response = await this.notesService.post(note);
            if (response.status === 200) {
                runInAction(() => {
                    this.postIsLoading = false;
                    this.postStatus = "success";
                })
            } else if (response.status === 400) {
                runInAction(() => {
                    this.postIsLoading = false;
                    this.postStatus = "error";
                })
            }
        } catch (error) {
            runInAction(() => {
                this.postStatus = "error";
                this.postIsLoading = false;
            });
        }
    };


    @action deleteNote = async (id) => {
        try {
            this.deleteIsLoading = true;
            this.deleteStatus = 'initial'
            const response = await this.notesService.delete(id);
            if (response.status === 200) {
                runInAction(() => {
                    this.deleteIsLoading = false;
                    this.deleteStatus = "success";
                })
            }
        } catch (error) {
            runInAction(() => {
                this.deleteIsLoading = false;
                this.deleteStatus = 'error'
            });
        }
    }
}


export default (createContext(new NoteStore()));