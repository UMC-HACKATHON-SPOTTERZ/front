import React from 'react';
import Masonry from 'react-responsive-masonry';

export default function SpotList() {
  return (
    <Masonry columnsCount={2}>
      <div style={{ height: '50px', backgroundColor: 'aliceblue' }}>
        sdfds11
      </div>
      <div style={{ height: '70px', backgroundColor: 'yellow' }}>sdfds22</div>
      <div style={{ height: '30px', backgroundColor: 'pink' }}>sdfds33</div>
      <div style={{ height: '150px', backgroundColor: 'green' }}>sdfds44</div>
      <div style={{ height: '80px', backgroundColor: 'gray' }}>sdfds55</div>
      <div style={{ height: '60px', backgroundColor: 'pink' }}>sdfds66</div>
      <div style={{ height: '50px', backgroundColor: 'aliceblue' }}>
        sdfds77
      </div>
    </Masonry>
  );
}
