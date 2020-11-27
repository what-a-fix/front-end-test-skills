<template>
    <div id="widgets">
        <ul class="list">
            <li v-for="widget in widgets" :key="widget.id">
                <span draggable="true" :sort="widget.sort">{{ widget.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            widgets: [], // collection de widgets
        }
    },
    mounted() {
      // Appel updateWidgetSort() afin d'obtenir la dernière version mise à jour de la collection de widgets
      this.updateWidgetsSort();
      let $dragList = document.querySelectorAll(".list span");
      let dragFrom = -1;
      let dragTo = -1;

      $dragList.forEach(draggableElement => {
        // faire glisser le widget sélectionné
        draggableElement.addEventListener('dragstart', (ev) => {
            ev.dataTransfer.effectAllowed = "move";
            dragFrom = parseInt(ev.target.getAttribute("sort"));
        });

        draggableElement.addEventListener('dragover', (ev) => {
            ev.preventDefault();
        });

        draggableElement.addEventListener('drop', (ev) => {
            ev.preventDefault();
            dragTo = parseInt(ev.target.getAttribute("sort"));

            //Tri les échanges
            let temp = this.widgets[dragFrom].sort;
            this.widgets[dragFrom].sort = this.widgets[dragTo].sort;
            this.widgets[dragTo].sort = temp;

            ev.target.classList.remove("dragTo");
            this.updateWidgetsSort();

        });

        draggableElement.addEventListener('dragend', (ev) => {
            ev.target.classList.remove("dragFrom");
            ev.preventDefault();
        });

        draggableElement.addEventListener('dragexit', (ev) => {
            ev.preventDefault();
        });

        draggableElement.addEventListener('dragleave', (ev) => {
            ev.preventDefault();
        });
      })
    },
    updated() {
        this.updateWidgetsSort();
    },
    methods: {
      //Changer la position de tri
      updateWidgetsSort() {
        let $list = document.querySelectorAll(".list li");
        let _widgets = [];
        this.widgets.forEach((widget, i) => {
            let y = parseInt(widget.sort / 3);
            let x = widget.sort % 3;
            $list[i].setAttribute("style", "transform: translate( " + 100 * x + "%, " + 100 * y +
                "%)");
            _widgets.push({ id: widget.id, sort: widget.sort });
        });

        if (!!window.localStorage) {
            window.localStorage["listSort"] = JSON.stringify(_widgets);
        }
        },
      updateSort() {
        this.widgets.sort((a, b) => {
            return a.sort - b.sort
        });
        this.widgets.forEach((widget, index) => {
            widget.sort = index;
        });
      }
    },

    created() {
        this.widgets = [
            { id: 0, name: "Widget 0" },
            { id: 1, name: "Widget 1" },
            { id: 2, name: "Widget 2" },
            { id: 3, name: "Widget 3" },
            { id: 4, name: "Widget 4" },
            { id: 5, name: "Widget 5" },
            { id: 6, name: "Widget 6" },
            { id: 7, name: "Widget 7" },
            { id: 8, name: "Widget 8" },
        ];

    let sorts = [];
    if (!!window.localStorage) {
      let listSort = window.localStorage["listSort"];
      if (listSort != undefined) {
          sorts = JSON.parse(listSort);
      }
    }
    if (sorts.length == 0) {
      this.widgets.forEach((widget, index) => {
          widget.sort = index;
      });
    } else {
        this.widgets.forEach((widget) => {
          for (let i = 0; i < sorts.length; i++) {
            if (widget.id == sorts[i].id) {
              widget.sort = sorts[i].sort;
              break;
            }
            else if( i==sorts.length-1 ){
              widget.sort=sorts.length;
            }
          }
        });
        this.updateSort();
    }
  }
}
</script>


<style>
    * {
      margin: 0;
      padding: 0;
    }

    html,
    body,
    #widgets {
      height: 100%;
    }

    .list span {
      position: absolute;
      left: 10px;
      top: 10px;
      right: 10px;
      bottom: 10px;
      line-height: 2;
      display: block;
      background: rgb(128, 54, 54);
      color: #fff;
      font-size: 20px;
      text-align: center;
      cursor: move;
      transition: all .4s;
    }

    .list,
    .list li {
      list-style: none;
    }

    .list {
      position: absolute;
      left: 10px;
      right: 10px;
      top: 500px;
      bottom: 10px;
      overflow: hidden;

    }

    .list li {
      position: absolute;
      width: 33.33%;
      height: 33.33%;
      transition: all .4s;
    }
</style>
