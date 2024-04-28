'use-client';
import "../styles/button.css"
import React from "react";
interface IbtnProps {
	name: string;
	link: string;

}


export default function Botao ({className, props}: {props: IbtnProps, className?: string})  {
		return (
			<div className={className}>
				<a href={props.link}>
					<button type="button">
						<span>{props.name}</span>
					</button>
				</a>
			</div>);
			}