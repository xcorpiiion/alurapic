import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { PhotoComment } from "../photo-details/photo-comment";

const API = 'http://localhost:3000/'

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {
    }

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(API + userName + '/photos')
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('pages', page.toString())
        return this.http.get<Photo[]>(API + userName + '/photos', { params: params })
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData()
        formData.append('description', description)
        formData.append('allowComments', allowComments ? 'true' : 'false')
        formData.append('imageFile', file)
        return this.http.post(API + 'photos/upload', formData)
    }

    findById(id: number) {
        return this.http.get<Photo>(API + 'photos/' + id)
    }

    getComments(id: number) {
        return this.http.get<PhotoComment[]>(API + 'photos/' + id + '/comments')
    }

    addComment(id: number, commentText: string) {
        return this.http.post(API + 'photos/' + id + '/comments', {
            commentText: commentText
        })
    }

    remove(id: number) {
        return this.http.delete(API + 'photos/' + id)
    }
}