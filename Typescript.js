<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Rushing Yards</th>
      <th>Touchdowns Thrown</th>
      <th>Sacks</th>
      <th>Field Goals Made</th>
      <th>Field Goals Missed</th>
      <th>Catches Made</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let player of players">
      <td>{{ player.name }}</td>
      <td>{{ player.rushingYards }}</td>
      <td>{{ player.touchdownsThrown }}</td>
      <td>{{ player.sacks }}</td>
      <td>{{ player.fieldGoalsMade }}</td>
      <td>{{ player.fieldGoalsMissed }}</td>
      <td>{{ player.catchesMade }}</td>
    </tr>
  </tbody>
</table>
 
