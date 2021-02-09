import React from 'react';
import {NotepadHeader} from "./NotepadHeader";

export class Notepad extends React.Component {
    render() {
        return (
            <section>
                <NotepadHeader
                    title="Hello World!"
                />
                <textarea>

                </textarea>
            </section>
        );
    }
}
