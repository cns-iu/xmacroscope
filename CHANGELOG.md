# Changelog

Changelog for the xMacroscope project.

## 0.7.0 - 2019-09-10

### Added in 0.7.0

- The Make-a-Vis UI for xMacroscope was changed completely, see updated [demo site](https://xmacroscope.netlify.com/)
  - The spec can be viewed here: <https://iu.app.box.com/s/d2sgqg1k4c3j3dm79f8h26v3cth609rs/folder/84623228094>
- Drag-and-Drop was replaced with more simple/obvious Button behavior
- The data variables are now: Age, Height, Time, Opponent, Shoes, and Zip Code
- The UI now has brighter, more engaging colors including in visualizations
- Opponents show up in all visualizations

### Known Issues in 0.7.0

- Opponents show up in the visualizations, but not styled according to Spec yet
- Ordering on the data table moves the opponents around rather than keeping them at the top
- The current UI is not hooked up to the server backend

## 0.0.6 - 2018-07-20

### Added in 0.0.6

- Fifth WIP release following Sprint 6, see updated [demo site](https://cns-iu.github.io/xmacroscope/)
- Totally redesigned Make-A-Vis screen
- Overall look and feel is updated
- The server / client version can now fully talk to one another enabling a physical run exhibit!
- The demo site is now built automatically on Travis CI when there is a push to master

### Known Issues in 0.0.6

- The Make-A-Vis is optimized for a 1080p browser window. Other resolutions may not look right.
- The color legend is not updating with data and field changes

## 0.0.4 - 2018-03-09

### Added in 0.0.4

- Fourth WIP release following Sprint 4, see updated [demo site](https://cns-iu.github.io/xmacroscope/)
- Hovering over a field or a visualization option now highlights the relevent option or field that it can be dragged to or from
- Mocking code now imitates user's not entering information in all fields (properly handle null values)
- The runners from the last 4 runs are now highlighted on the scatterplot and geomap (they retain their shape and color with a black outline)
- The code was refactored to pull out reusable packages that may be useful in other contexts (i.e., ngx-dino and Make-A-Vis)

## 0.0.3 - 2018-02-16

### Added in 0.0.3

- Third WIP release following Sprint 3, see updated [demo site](https://cns-iu.github.io/xmacroscope/)
- Scatterplot and Geomap improvements: size, color, and shape coding; more fields have been added; shared code is closer to being the same even though one uses D3 and the other VEGA
- Combined server, client (start line), and AISL (end line + MAV) projects using Lerna
- All further development will be occur in the [xMacroscope Repository](https://github.com/cns-iu/xmacroscope)
- AISL can communicate with server over GraphQL (currently disabled)
- Client can send a RunSelected event following a sensor input (a simulated 's' press)
- Server saves messages added via GraphQL and dispatches updates via GraphQL subscriptions over WebSockets
- The setup was tested and verified at the local IU instance of the Run Exhbit (WIP). Details and setup instructions will come in the next Sprint.

## 0.0.2 - 2018-01-26

### Added in 0.0.2

- Second WIP release following Sprint 2, see updated [demo site](https://cns-iu.github.io/xmacroscope/)
- A GraphQL schema has been created for the API
- Messages are now being sent over GraphQL subscriptions from a WebWorker-based 'backend'
- More of the visualization framework is in place to improve the two visualizations
- Scatterplot has been cleaned up and using the updated framework
- Geomap has been implemented in VEGA and using the data visualization framework

## 0.0.1 - 2017-12-22

### Added in 0.0.1

- First WIP release of the project following Sprint 1!
- Created four screens: backend, endline, make-a-vis, and mockup. Backend shows debug messages demonstrating that messages are being generated. Endline is the screen for the Run exhibit showing the runners' run times. Make-a-vis is the screen where users can create visualizations from the data generated by runners. Mockup is the screen showing a mockup of the make-a-vis screen (used for styling and research related to the looks of the site).
- Endline is fully utilizing the messages generated by the backend, while make-a-vis is still in process for fully utilizing the data. Mockup does not use any 'live' data.
- Each screen can be compiled to run just that screen for deployment/kiosk purposes.
- Created a [demo site](https://cns-iu.github.io/xmacroscope/) for presenting the four screens created during Sprint 1.
