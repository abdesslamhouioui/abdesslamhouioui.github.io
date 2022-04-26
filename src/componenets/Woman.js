import React from 'react'
import { WomanDiv, WomanHeader, WomanHeader2, WomanHeader3, WomanImg, Womanp, WomanRapper, WomanRapper2, WomanRectangle, WomanVector } from '../styles/Styles'
const Woman = () => {
  return (
    <div>
        <WomanRapper>
            <WomanImg/>
            <WomanHeader> Empowered by Innovation, Commited by Intellect and Driven by Values</WomanHeader>
            <WomanRapper2>
              <WomanDiv>
                <WomanRectangle row={1}/>
                <WomanVector row={1}/>
                <WomanHeader2>07</WomanHeader2>
                <WomanHeader3>Projects</WomanHeader3>
                <Womanp>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin 
                  convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet 
                  neque. Sed est malesuada lobortis aliquam dolor eget donec 
                </Womanp>
              </WomanDiv>
              <WomanDiv>
                <WomanRectangle row={2}/>
                <WomanVector row={2}/>
                <WomanHeader2>23</WomanHeader2>
                <WomanHeader3>Clients</WomanHeader3>
                <Womanp>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed 
                  morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id 
                  ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est malesuada lobortis aliquam dolor eget donec 
                </Womanp>
              </WomanDiv>
              <WomanDiv> 
                <WomanRectangle row={3}/>
                <WomanVector row={3}/>
                <WomanHeader2>04</WomanHeader2>
                <WomanHeader3>Tech  Creative teams</WomanHeader3>
                <Womanp>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed 
                  morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id 
                  ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est malesuada lobortis aliquam dolor eget donec 
                </Womanp>
              </WomanDiv> 
            </WomanRapper2>
        </WomanRapper>
    </div>
  )
}
export default Woman