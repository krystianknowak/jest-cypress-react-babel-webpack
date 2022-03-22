import React from 'react'
import {render, screen} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('formats the value', () => {
  render(<AutoScalingText />)
})
