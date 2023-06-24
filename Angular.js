import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Player {
  name: string;
  rushingYards: number;
  touchdownsThrown: number;
  sacks: number;
  fieldGoalsMade: number;
  fieldGoalsMissed: number;
  catchesMade: number;
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.http.get<Player[]>('http://localhost:3000/players').subscribe(
      (response) => {
        this.players = response;
      },
      (error) => {
        console.log('Error fetching players:', error);
      }
    );
  }
}
