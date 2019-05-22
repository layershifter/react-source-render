let hmrId = 0

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.addStatusHandler(status => {
      if (status === "idle") {
        hmrId += 1
      }
    })
  }
}

export const useHMRId = (enabled: boolean) => {
  return enabled ? hmrId : 0
}