import { createStore } from "@reduxjs/toolkit";
import reducer from './reducer'

const state = createStore(reducer)

export default state