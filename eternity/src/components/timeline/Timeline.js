import React, { Component } from 'react';
import TimelineItem from './TimelineItem';
import { Container, Image, Divider, Button } from 'semantic-ui-react';
import logo from '../../images/Triskelion_A.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import TimelineForm from './TimelineForm.js';
import { userInfo } from 'os';

export default class Timeline extends Component {
	render() {
		const allTimeline = this.props.timeline.map((timeline, index) => {
			return (
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={timeline.week}
					iconStyle={{ background: '#999999', color: '#000' }}
					icon={<Image size="mini" src={logo} centered="true" className="icon" />}
				>
					<TimelineItem key={index} timeline={timeline} />
				</VerticalTimelineElement>
			);
		});

		return (
			<Container className="timeline">
				<div className="memories">
					<Divider horizontal>Memories Timeline</Divider>
					<Container textAlign="center">
						<Button basic color="teal" centered>
							Add a New Memory
						</Button>
					</Container>

					<div className="test">
						<Divider />
						<VerticalTimeline>{allTimeline}</VerticalTimeline>
					</div>
				</div>
			</Container>
		);
	}
}
