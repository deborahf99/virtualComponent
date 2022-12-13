import * as React from 'react';
import { Label } from '@fluentui/react';
import {useRef, useState} from "react";
import "./App.css";
import DragDrop from "./DragDrop";

export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <DragDrop/>
      </div>
    );
  }
}
