import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return React.createElement(
    MDBFooter,
    { className: 'bg-light text-center text-white' },
    React.createElement(
      MDBContainer,
      { className: 'p-4 pb-0' },
      React.createElement(
        'section',
        { className: 'mb-4' },
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#3b5998' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'facebook-f' })
        ),
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#55acee' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'twitter' })
        ),
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#dd4b39' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'google' })
        ),
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#ac2bac' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'instagram' })
        ),
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#0082ca' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'linkedin-in' })
        ),
        React.createElement(
          MDBBtn,
          {
            floating: true,
            className: 'm-1',
            style: { backgroundColor: '#333333' },
            href: '#!',
            role: 'button'
          },
          React.createElement(MDBIcon, { fab: true, icon: 'github' })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'text-center p-3', style: { backgroundColor: 'rgba(51, 45, 45)' } },
      '\xA9 2020 Copyright:',
    )
  );
}

