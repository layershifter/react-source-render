/**
 * @jest-environment jsdom
 */
import { mount } from "enzyme"
import React from "react"

import noop from "./noop"
import SourceRender from "./SourceRender"

jest.useFakeTimers()

const reactResolver = () => React

const invalidSource = `
import React from "react"

const Foo = () => <div ref={c => c.log()} />

export default Foo`

const validSource = `
import React from "react"

const Foo = () => <span />

export default Foo`

describe("SourceRender", () => {
  beforeAll(() => {
    global.console.error = noop

    global.cancelAnimationFrame = id => clearTimeout(id)
    global.requestAnimationFrame = fn => setTimeout(fn, 1)
  })

  describe("children", () => {
    it("renders without errors", () => {
      const attachTo = document.createElement("div")
      document.body.appendChild(attachTo)
      const wrapper = mount(<SourceRender resolver={reactResolver} source={validSource} />, {
        attachTo,
      })

      jest.runAllTimers()
      expect(attachTo.innerHTML).toEqual("<div><span></span></div>")

      wrapper.detach()
      document.body.removeChild(attachTo)
    })

    it("renders with errors", () => {
      const attachTo = document.createElement("div")
      document.body.appendChild(attachTo)
      const wrapper = mount(<SourceRender resolver={reactResolver} source={invalidSource} />, {
        attachTo,
      })

      jest.runAllTimers()
      expect(attachTo.innerHTML).toEqual("<div></div>")

      wrapper.detach()
      document.body.removeChild(attachTo)
    })

    it("renders last valid element after error", () => {
      const attachTo = document.createElement("div")
      document.body.appendChild(attachTo)
      const wrapper = mount(<SourceRender source={validSource} resolver={reactResolver} />, {
        attachTo,
      })

      jest.runAllTimers()
      expect(attachTo.innerHTML).toEqual("<div><span></span></div>")

      wrapper.setProps({ source: invalidSource })
      jest.runAllTimers()
      expect(attachTo.innerHTML).toEqual("<div><span></span></div>")

      wrapper.setProps({ source: validSource.replace(/span/g, "p") })
      jest.runAllTimers()
      expect(attachTo.innerHTML).toEqual("<div><p></p></div>")
    })
  })

  describe("onRender", () => {
    it("will be called with HTML markup on initial render", () => {
      const onSuccess = jest.fn()
      mount(<SourceRender onSuccess={onSuccess} source={validSource} resolver={reactResolver} />)

      jest.runAllTimers()
      expect(onSuccess).toBeCalledWith(
        null,
        expect.objectContaining({
          markup: "<span></span>",
        }),
      )
    })

    it("will be called with HTML markup after update", () => {
      const onSuccess = jest.fn()
      const wrapper = mount(
        <SourceRender onSuccess={onSuccess} source={validSource} resolver={reactResolver} />,
      )
      jest.runAllTimers()

      wrapper.setProps({ source: validSource.replace(/span/g, "p") })
      jest.runAllTimers()
      expect(onSuccess).toBeCalledWith(
        null,
        expect.objectContaining({
          markup: "<p></p>",
        }),
      )
    })
  })
})
