/*
 * /src/lib/components/activities/draw/Draw.jsx
 * Draw.jsx
 * cml-narrative
 *
 * Created by Ian Thompson on May 22nd 2023
 * icthomp@g.clemson.edu
 *
 * https://idealab.sites.clemson.edu
 *
 */

import { Excalidraw, exportToSvg } from '@excalidraw/excalidraw';

import React from 'react';
import { useState } from 'react';

import DataService from '$lib/utils/DataService';

import {drawResponse} from "$lib/utils/stores/store"

/**
 * Defines the Draw React component
 *
 * This component houses the Exalidraw "whiteboard" which will allow users to draw and type on a canvas.
 * This tool provides a simple API to allow us to convert the drawing to an SVG which we can then upload to the server
 * for data collection later.
 *
 * This project is mostly written in Svelte, however this library was written in React. This does add a little bit
 * of overhead, but it is well worth it for the addition of the canvas drawing.
 *
 * Documentation for the conversion to SVG can be found here:
 * https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils/export
 */
export function Draw() {
	const [excalidrawAPI, setExcalidrawAPI] = useState(null);

	let drawRes;

	drawResponse.subscribe((value) => {
		drawRes = value
	})

	return (
		<div className="">
			<div style={{ height: '575px', backgroundColor: 'white' }} className="">
				<Excalidraw ref={(api) => setExcalidrawAPI(api)} />
			</div>

			<div className="mt-9 flex items-center justify-center">
				<button
					className="rounded-md bg-lapiz-blue px-8 text-xl text-white"
					onClick={async () => {
						const elements = excalidrawAPI.getSceneElements();
						const svg = await exportToSvg({
							elements,
							appState: {
								exportWithDarkMode: false
							},
							files: excalidrawAPI.getFiles()
						});


						/**
						 * We will set the drawResponse store to the svg we have just created. This is done because there
						 * is not a direct way to conencted between
						 * Svelte and this react component
						 * 
						 * We will handle in our code where we expect a response
						 * and grab the image from the store.
						 * 
						 * This is not the best, and is hacky. But will do for the meantime,
						 */
						drawResponse.set(svg)
					}}>
					SUBMIT!
				</button>
			</div>
		</div>
	);
}
