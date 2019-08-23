import React, { Component } from 'react'
import './ProjectItem.css';
import PosterImage from './PosterImage';
import ProjectTag from './ProjectTag';
import { Card, Icon, Image, Popup, Label, List } from 'semantic-ui-react'

export default class ProjectItem extends Component {
    render() {
      let labelColor = "";
      let byIcon = "user";
      // team project or not
      let by = this.props.project.by[0];
      if (this.props.project.by.length > 1){
        byIcon = "users";
        switch (this.props.project.by[0]){
          case "Reem AlHarbi":
            by = "The Pikmin";
            labelColor = "pink";
            break;
        }
      }

      // list of names for the popup
      const byList = this.props.project.by.map((person, index) => {
        return(
              <List icon="user" key="index">
                <List.Icon name='user' />
                {person}
              </List>
              )
      })        
      // list of the tags 
        const tagsList = this.props.project.tags.map((tag, index) => {
            return <ProjectTag tag={tag} key={index}/>
        });
        let color 
        switch (this.props.project.no) {
            case 1:
              color = "blue";
              break;
            case 2:
              color = "red";
              break;
            case 3:
               color = "green";
              break;
            case 4:
              color = "yellow";
              break;
            default:
                color =""
          }
        return (
            <Card>
            <Image src={this.props.project.img_url}  wrapped ui={false} 
            label={{ as: 'a', color: color, content: `Project ${this.props.project.no}`, ribbon: true }}
             />


    <Card.Content>
      <Card.Header>{this.props.project.name}</Card.Header>


    <Card.Meta>       
</Card.Meta>
      <Card.Description>
         {this.props.project.text}
      </Card.Description>

    </Card.Content>
    <Card.Content extra>

          <a href={this.props.project.git_url} target="_blank" >
          <Icon name="github square"  size="big"/>
          </a>

          <a href={this.props.project.deployed_url} target="_blank" >
          <Icon name="play" size="big"/>
          </a>
          
          <Popup trigger={
            <Label as='a' color={labelColor} image>
            <Icon name={byIcon} />
              {by}
            </Label>
          }>
            {byList}
          </Popup>
          

          
      </Card.Content>

      <Card.Content extra>

      {tagsList}
          
      </Card.Content>
            </Card>
        )
    }
}
