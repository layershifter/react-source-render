// /**
//  * @jest-environment jsdom
//  */
// import { mount } from "enzyme"
// import * as React from "react"
//
// import SourceRender from "./SourceRender"
//
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
// const Bar = () => <span />
//
// export default Bar`
//
// describe("SourceRender", () => {
//   beforeAll(() => {
//     global.console.error = () => {}
//   })
//
//   describe("children", () => {
//     it("renders without errors", () => {
//       const wrapper = mount(
//         <SourceRender resolver={reactResolver} source={validSource}>
//           {({ element }) => element}
//         </SourceRender>,
//       )
//
//       expect(wrapper.find("Bar")).toHaveLength(1)
//     })
//
//     it("renders with errors", () => {
//       const wrapper = mount(
//         <SourceRender resolver={reactResolver} source={invalidSource}>
//           {({ element }) => element}
//         </SourceRender>,
//       )
//
//       expect(wrapper.find("FallbackRender")).toHaveLength(1)
//     })
//
//     it("renders last valid element after error", () => {
//       const wrapper = mount(
//         <SourceRender resolver={reactResolver} source={validSource}>
//           {({ element }) => element}
//         </SourceRender>,
//       )
//
//       expect(wrapper.find("FallbackRender")).toHaveLength(0)
//       expect(wrapper.find("Bar")).toHaveLength(1)
//
//       wrapper.setProps({ source: invalidSource })
//       wrapper.update()
//
//       expect(wrapper.find("FallbackRender")).toHaveLength(1)
//       expect(wrapper.find("Bar")).toHaveLength(1)
//     })
//   })
//
//   describe("renderHtml", () => {
//     it("will be called with empty markup when is `false`", () => {
//       const children = jest.fn()
//       mount(
//         <SourceRender renderHtml={false} resolver={reactResolver} source={validSource}>
//           {children}
//         </SourceRender>,
//       )
//
//       expect(children).toBeCalledWith(
//         expect.objectContaining({
//           markup: "",
//         }),
//       )
//     })
//
//     it("will be called with markup by default", () => {
//       const children = jest.fn()
//       mount(
//         <SourceRender resolver={reactResolver} source={validSource}>
//           {children}
//         </SourceRender>,
//       )
//
//       expect(children).toBeCalledWith(
//         expect.objectContaining({
//           markup: "<span></span>",
//         }),
//       )
//     })
//   })
// })
