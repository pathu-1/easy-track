import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
    selector: 'app-user',
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    user = input.required<User>()
    selected = input.required<boolean>()
    imagePath = computed(() => "assets/users/" + this.user().avatar)
    selectedUser = output<string>()

    onSelectUser() {
        this.selectedUser.emit(this.user().id)
    }
}
