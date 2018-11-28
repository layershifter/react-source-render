/**
 * @jest-environment jsdom
 */
// import { mount } from "enzyme"
// import * as React from "react"

// import SourceRender from "./SourceRender"

// const reactResolver = () => React
//
// const invalidSource = `
// import React from "react"
//
// const Foo = () => <div ref={c => c.log()} />
//
// export default Foo`
//
// const validSource = `
// import React from "react"
//
// const Foo = () => <span />
//
// export default Foo`

describe("SourceRender", () => {
  beforeAll(() => {
    global.console.error = () => {}
  })

  describe("children", () => {
    // it("renders without errors", () => {
    //   const attachTo = document.createElement("div")
    //   document.body.appendChild(attachTo)
    //   const wrapper = mount(<SourceRender resolver={reactResolver} source={validSource} />, {
    //     attachTo,
    //   })
    //
    //   expect(attachTo.innerHTML).toEqual("<div><span></span></div>")
    //
    //   wrapper.detach()
    //   document.body.removeChild(attachTo)
    // })
    // it("renders with errors", () => {
    //   const attachTo = document.createElement("div")
    //   document.body.appendChild(attachTo)
    //   const wrapper = mount(<SourceRender resolver={reactResolver} source={invalidSource} />, {
    //     attachTo,
    //   })
    //
    //   expect(attachTo.innerHTML).toEqual("<div></div>")
    //
    //   wrapper.detach()
    //   document.body.removeChild(attachTo)
    // })
    //
    // it("renders last valid element after error", () => {
    //   const attachTo = document.createElement("div")
    //   document.body.appendChild(attachTo)
    //   const wrapper = mount(<SourceRender source={validSource} resolver={reactResolver} />, {
    //     attachTo,
    //   })
    //
    //   expect(attachTo.innerHTML).toEqual("<div><span></span></div>")
    //
    //   wrapper.setProps({ source: invalidSource })
    //   expect(attachTo.innerHTML).toEqual("<div><span></span></div>")
    //
    //   wrapper.setProps({ source: validSource.replace(/span/g, "p") })
    //   expect(attachTo.innerHTML).toEqual("<div><p></p></div>")
    // })
  })

  describe("renderHtml", () => {
    // it("will be called with null markup when is `false`", () => {
    //   const onSuccess = jest.fn()
    //   mount(
    //     <SourceRender
    //       onSuccess={onSuccess}
    //       source={validSource}
    //       renderHtml={false}
    //       resolver={reactResolver}
    //     />,
    //   )
    //
    //   jest.runAllTimers()
    //   expect(onSuccess).toBeCalledWith(
    //     null,
    //     expect.objectContaining({
    //       markup: null,
    //     }),
    //   )
    // })
  })
})
