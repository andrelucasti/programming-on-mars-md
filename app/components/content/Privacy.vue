<template>
  <Headers></Headers>
    <div class="container">
      <div class="row">
        <main class="page-wrapper rbt-dashboard-page">
          <div class="rbt-panel-wrapper">
            <div class="rbt-main-content mb--0">
              <div class="rbt-daynamic-page-content center-width">
                <div class="rbt-dashboard-content rainbow-section-gap">
                  <div class="banner-area">
                    <slot :use="$slots.default"></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  <Footers></Footers>
  </template>