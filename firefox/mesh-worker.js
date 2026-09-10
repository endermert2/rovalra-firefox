(function() {
  "use strict";
  new TextDecoder();
  new TextDecoder();
  const FullBodyColorPalette = [
    {
      "brickColorId": 361,
      "hexColor": "#564236",
      "name": "Dirt brown"
    },
    {
      "brickColorId": 192,
      "hexColor": "#694028",
      "name": "Reddish brown"
    },
    {
      "brickColorId": 217,
      "hexColor": "#7C5C46",
      "name": "Brown"
    },
    {
      "brickColorId": 153,
      "hexColor": "#957977",
      "name": "Sand red"
    },
    {
      "brickColorId": 359,
      "hexColor": "#AF9483",
      "name": "Linen"
    },
    {
      "brickColorId": 352,
      "hexColor": "#C7AC78",
      "name": "Burlap"
    },
    {
      "brickColorId": 5,
      "hexColor": "#D7C59A",
      "name": "Brick yellow"
    },
    {
      "brickColorId": 101,
      "hexColor": "#DA867A",
      "name": "Medium red"
    },
    {
      "brickColorId": 1007,
      "hexColor": "#A34B4B",
      "name": "Dusty Rose"
    },
    {
      "brickColorId": 1014,
      "hexColor": "#AA5500",
      "name": "CGA brown"
    },
    {
      "brickColorId": 38,
      "hexColor": "#A05F35",
      "name": "Dark orange"
    },
    {
      "brickColorId": 18,
      "hexColor": "#CC8E69",
      "name": "Nougat"
    },
    {
      "brickColorId": 125,
      "hexColor": "#EAB892",
      "name": "Light orange"
    },
    {
      "brickColorId": 1030,
      "hexColor": "#FFCC99",
      "name": "Pastel brown"
    },
    {
      "brickColorId": 133,
      "hexColor": "#D5733D",
      "name": "Neon orange"
    },
    {
      "brickColorId": 106,
      "hexColor": "#DA8541",
      "name": "Bright orange"
    },
    {
      "brickColorId": 105,
      "hexColor": "#E29B40",
      "name": "Br. yellowish orange"
    },
    {
      "brickColorId": 1017,
      "hexColor": "#FFAF00",
      "name": "Deep orange"
    },
    {
      "brickColorId": 24,
      "hexColor": "#F5CD30",
      "name": "Bright yellow"
    },
    {
      "brickColorId": 334,
      "hexColor": "#F8D96D",
      "name": "Daisy orange"
    },
    {
      "brickColorId": 226,
      "hexColor": "#FDEA8D",
      "name": "Cool yellow"
    },
    {
      "brickColorId": 141,
      "hexColor": "#27462D",
      "name": "Earth green"
    },
    {
      "brickColorId": 1021,
      "hexColor": "#3A7D15",
      "name": "Camo"
    },
    {
      "brickColorId": 28,
      "hexColor": "#287F47",
      "name": "Dark green"
    },
    {
      "brickColorId": 37,
      "hexColor": "#4B974B",
      "name": "Bright green"
    },
    {
      "brickColorId": 310,
      "hexColor": "#5B9A4C",
      "name": "Shamrock"
    },
    {
      "brickColorId": 317,
      "hexColor": "#7C9C6B",
      "name": "Moss"
    },
    {
      "brickColorId": 119,
      "hexColor": "#A4BD47",
      "name": "Br. yellowish green"
    },
    {
      "brickColorId": 1011,
      "hexColor": "#002060",
      "name": "Navy blue"
    },
    {
      "brickColorId": 1012,
      "hexColor": "#2154B9",
      "name": "Deep blue"
    },
    {
      "brickColorId": 1010,
      "hexColor": "#0000FF",
      "name": "Really blue"
    },
    {
      "brickColorId": 23,
      "hexColor": "#0D69AC",
      "name": "Bright blue"
    },
    {
      "brickColorId": 305,
      "hexColor": "#527CAE",
      "name": "Steel blue"
    },
    {
      "brickColorId": 102,
      "hexColor": "#6E99CA",
      "name": "Medium blue"
    },
    {
      "brickColorId": 45,
      "hexColor": "#B4D2E4",
      "name": "Light blue"
    },
    {
      "brickColorId": 107,
      "hexColor": "#008F9C",
      "name": "Bright bluish green"
    },
    {
      "brickColorId": 1018,
      "hexColor": "#12EED4",
      "name": "Teal"
    },
    {
      "brickColorId": 1027,
      "hexColor": "#9FF3E9",
      "name": "Pastel blue-green"
    },
    {
      "brickColorId": 1019,
      "hexColor": "#00FFFF",
      "name": "Toothpaste"
    },
    {
      "brickColorId": 1013,
      "hexColor": "#04AFEC",
      "name": "Cyan"
    },
    {
      "brickColorId": 11,
      "hexColor": "#80BBDC",
      "name": "Pastel Blue"
    },
    {
      "brickColorId": 1024,
      "hexColor": "#AFDDFF",
      "name": "Pastel light blue"
    },
    {
      "brickColorId": 104,
      "hexColor": "#6B327C",
      "name": "Bright violet"
    },
    {
      "brickColorId": 1023,
      "hexColor": "#8C5B9F",
      "name": "Lavender"
    },
    {
      "brickColorId": 321,
      "hexColor": "#A75E9B",
      "name": "Lilac"
    },
    {
      "brickColorId": 1015,
      "hexColor": "#AA00AA",
      "name": "Magenta"
    },
    {
      "brickColorId": 1031,
      "hexColor": "#6225D1",
      "name": "Royal purple"
    },
    {
      "brickColorId": 1006,
      "hexColor": "#B480FF",
      "name": "Alder"
    },
    {
      "brickColorId": 1026,
      "hexColor": "#B1A7FF",
      "name": "Pastel violet"
    },
    {
      "brickColorId": 21,
      "hexColor": "#C4281C",
      "name": "Bright red"
    },
    {
      "brickColorId": 1004,
      "hexColor": "#FF0000",
      "name": "Really red"
    },
    {
      "brickColorId": 1032,
      "hexColor": "#FF00BF",
      "name": "Hot pink"
    },
    {
      "brickColorId": 1016,
      "hexColor": "#FF66CC",
      "name": "Pink"
    },
    {
      "brickColorId": 330,
      "hexColor": "#FF98DC",
      "name": "Carnation pink"
    },
    {
      "brickColorId": 9,
      "hexColor": "#E8BAC8",
      "name": "Light reddish violet"
    },
    {
      "brickColorId": 1025,
      "hexColor": "#FFC9C9",
      "name": "Pastel orange"
    },
    {
      "brickColorId": 364,
      "hexColor": "#5A4C42",
      "name": "Dark taupe"
    },
    {
      "brickColorId": 351,
      "hexColor": "#BC9B5D",
      "name": "Cork"
    },
    {
      "brickColorId": 1008,
      "hexColor": "#C1BE42",
      "name": "Olive"
    },
    {
      "brickColorId": 29,
      "hexColor": "#A1C48C",
      "name": "Medium green"
    },
    {
      "brickColorId": 1022,
      "hexColor": "#7F8E64",
      "name": "Grime"
    },
    {
      "brickColorId": 151,
      "hexColor": "#789082",
      "name": "Sand green"
    },
    {
      "brickColorId": 135,
      "hexColor": "#74869D",
      "name": "Sand blue"
    },
    {
      "brickColorId": 1020,
      "hexColor": "#00FF00",
      "name": "Lime green"
    },
    {
      "brickColorId": 1028,
      "hexColor": "#CCFFCC",
      "name": "Pastel green"
    },
    {
      "brickColorId": 1009,
      "hexColor": "#FFFF00",
      "name": "New Yeller"
    },
    {
      "brickColorId": 1029,
      "hexColor": "#FFFFCC",
      "name": "Pastel yellow"
    },
    {
      "brickColorId": 1003,
      "hexColor": "#111111",
      "name": "Really black"
    },
    {
      "brickColorId": 26,
      "hexColor": "#1B2A35",
      "name": "Black"
    },
    {
      "brickColorId": 199,
      "hexColor": "#635F62",
      "name": "Dark stone grey"
    },
    {
      "brickColorId": 194,
      "hexColor": "#A3A2A5",
      "name": "Medium stone grey"
    },
    {
      "brickColorId": 1002,
      "hexColor": "#CDCDCD",
      "name": "Mid gray"
    },
    {
      "brickColorId": 208,
      "hexColor": "#E5E4DF",
      "name": "Light stone grey"
    },
    {
      "brickColorId": 1,
      "hexColor": "#F2F3F3",
      "name": "White"
    },
    {
      "brickColorId": 1001,
      "hexColor": "#F8F8F8",
      "name": "Institutional white"
    }
  ];
  const RegularBodyColors = [
    "5A4C42",
    "7C5C46",
    "AF9483",
    "CC8E69",
    "EAB892",
    "564236",
    "694028",
    "BC9B5D",
    "c7ac78",
    "d7c59a",
    "957977",
    "a34b4b",
    "da867a",
    "ffc9c9",
    "ff98dc",
    "74869d",
    "527cae",
    "80bbdc",
    "b1a7ff",
    "a75e9b",
    "008f9c",
    "5b9a4c",
    "7c9c6b",
    "a1c48c",
    "e29b40",
    "f5cd30",
    "f8d96d",
    "635f62",
    "cdcdcd",
    "f8f8f8"
  ];
  for (let i = 0; i < RegularBodyColors.length; i++) {
    const color = RegularBodyColors[i];
    RegularBodyColors[i] = color.toUpperCase();
  }
  const FullBodyColors = [];
  for (const colorDetails of FullBodyColorPalette) {
    FullBodyColors.push(colorDetails.hexColor.substring(1));
  }
  function calculateMagnitude3D(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
  }
  function magnitude(v) {
    return calculateMagnitude3D(v[0], v[1], v[2]);
  }
  function minus(v0, v1) {
    return [v0[0] - v1[0], v0[1] - v1[1], v0[2] - v1[2]];
  }
  function distance(v0, v1) {
    return magnitude(minus(v1, v0));
  }
  class KDNode {
    point;
    index;
    axis;
    left = null;
    right = null;
    constructor(point, index, axis) {
      this.point = point;
      this.index = index;
      this.axis = axis;
    }
  }
  function buildKDTree(points, indices, depth = 0) {
    if (points.length === 0) return null;
    const axis = depth % 3;
    const sorted = points.map((p, i) => ({ p, index: indices[i] })).sort((a, b) => a.p[axis] - b.p[axis]);
    const mid = Math.floor(sorted.length / 2);
    const node = new KDNode(sorted[mid].p, sorted[mid].index, axis);
    const leftPoints = sorted.slice(0, mid).map((x) => x.p);
    const leftIndices = sorted.slice(0, mid).map((x) => x.index);
    const rightPoints = sorted.slice(mid + 1).map((x) => x.p);
    const rightIndices = sorted.slice(mid + 1).map((x) => x.index);
    node.left = buildKDTree(leftPoints, leftIndices, depth + 1);
    node.right = buildKDTree(rightPoints, rightIndices, depth + 1);
    return node;
  }
  function siftUp(heap, i) {
    while (i > 0) {
      const p = i - 1 >> 1;
      if (heap[p].dist >= heap[i].dist) break;
      const tmp = heap[p];
      heap[p] = heap[i];
      heap[i] = tmp;
      i = p;
    }
  }
  function siftDown(heap, i) {
    const n = heap.length;
    while (true) {
      let largest = i;
      const l = (i << 1) + 1;
      const r = l + 1;
      if (l < n && heap[l].dist > heap[largest].dist) largest = l;
      if (r < n && heap[r].dist > heap[largest].dist) largest = r;
      if (largest === i) break;
      const tmp = heap[i];
      heap[i] = heap[largest];
      heap[largest] = tmp;
      i = largest;
    }
  }
  function heapPushMax(heap, item, k) {
    if (heap.length < k) {
      heap.push(item);
      siftUp(heap, heap.length - 1);
      return;
    }
    if (item.dist >= heap[0].dist) return;
    heap[0] = item;
    siftDown(heap, 0);
  }
  function distSq(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
  }
  function knnSearch(node, target, k, heap = []) {
    if (!node) return heap;
    const axis = node.axis;
    const dist = distSq(target, node.point);
    heapPushMax(heap, { dist, index: node.index }, k);
    const diff = target[axis] - node.point[axis];
    const primary = diff < 0 ? node.left : node.right;
    const secondary = diff < 0 ? node.right : node.left;
    knnSearch(primary, target, k, heap);
    const worstDist = heap.length < k ? Infinity : heap[0].dist;
    if (diff * diff < worstDist) {
      knnSearch(secondary, target, k, heap);
    }
    if (node === null) {
      heap.sort((a, b) => a.dist - b.dist);
    }
    return heap;
  }
  function nearestSearch(node, target, best = { dist: Infinity, index: -1 }) {
    if (!node) return best;
    const dist = distance(target, node.point);
    if (dist < best.dist) {
      best = { dist, index: node.index };
    }
    const axis = node.axis;
    const diff = target[axis] - node.point[axis];
    const primary = diff < 0 ? node.left : node.right;
    const secondary = diff < 0 ? node.right : node.left;
    best = nearestSearch(primary, target, best);
    if (Math.abs(diff) < best.dist) {
      best = nearestSearch(secondary, target, best);
    }
    return best;
  }
  function luDecompose(A) {
    const n = A.length;
    const LU = A;
    const P = new Int32Array(n);
    for (let i = 0; i < n; i++) P[i] = i;
    for (let k = 0; k < n; k++) {
      let pivot = k;
      for (let i = k + 1; i < n; i++) {
        if (Math.abs(LU[i][k]) > Math.abs(LU[pivot][k])) {
          pivot = i;
        }
      }
      if (pivot !== k) {
        const tmpRow = LU[k];
        LU[k] = LU[pivot];
        LU[pivot] = tmpRow;
        const tmpP = P[k];
        P[k] = P[pivot];
        P[pivot] = tmpP;
      }
      const pivotVal = LU[k][k];
      for (let i = k + 1; i < n; i++) {
        LU[i][k] /= pivotVal;
        const mult = LU[i][k];
        const rowI = LU[i];
        const rowK = LU[k];
        for (let j = k + 1; j < n; j++) {
          rowI[j] -= mult * rowK[j];
        }
      }
    }
    return { LU, P };
  }
  function luSolve({ LU, P }, b) {
    const n = LU.length;
    const x = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      x[i] = b[P[i]];
    }
    for (let i = 0; i < n; i++) {
      const row = LU[i];
      let sum = x[i];
      for (let j = 0; j < i; j++) {
        sum -= row[j] * x[j];
      }
      x[i] = sum;
    }
    for (let i = n - 1; i >= 0; i--) {
      const row = LU[i];
      let sum = x[i];
      for (let j = i + 1; j < n; j++) {
        sum -= row[j] * x[j];
      }
      x[i] = sum / row[i];
    }
    return x;
  }
  function patchRBFWorkerFunc([_A, _bx, _by, _bz]) {
    const A = _A.map((r) => new Float32Array(r));
    const bx = new Float32Array(_bx);
    const by = new Float32Array(_by);
    const bz = new Float32Array(_bz);
    const LU = luDecompose(A);
    const wx = luSolve(LU, bx);
    const wy = luSolve(LU, by);
    const wz = luSolve(LU, bz);
    const n = wx.length;
    const result = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      result[i * 3 + 0] = wx[i];
      result[i * 3 + 1] = wy[i];
      result[i * 3 + 2] = wz[i];
    }
    return result.buffer;
  }
  function RBFDeformerSolveAsync([patchCount, detailsCount, epsilon, importantIndicesBuf, refVertsBuf, distVertsBuf, meshVertsBuf, meshBonesBuf]) {
    const importantIndices = new Uint16Array(importantIndicesBuf);
    const refVerts = new Float32Array(refVertsBuf);
    const distVerts = new Float32Array(distVertsBuf);
    const meshVerts = new Float32Array(meshVertsBuf);
    const meshBones = new Float32Array(meshBonesBuf);
    const refCount = refVerts.length / 3;
    const meshVertCount = meshVerts.length / 3;
    const meshBoneCount = meshBones.length / 3;
    const points = new Array(refCount);
    const indices = new Array(refCount);
    for (let i = 0; i < refCount; i++) {
      const refPos = [refVerts[i * 3 + 0], refVerts[i * 3 + 1], refVerts[i * 3 + 2]];
      points[i] = refPos;
      indices[i] = i;
    }
    const controlKD = buildKDTree(points, indices);
    const step = Math.max(1, Math.floor(refCount / patchCount));
    const patchCenters = [];
    for (let i = 0; i < refCount; i += step) {
      const refPos = [refVerts[i * 3 + 0], refVerts[i * 3 + 1], refVerts[i * 3 + 2]];
      patchCenters.push(refPos);
      if (patchCenters.length >= patchCount) break;
    }
    const neighborIndices = new Array(patchCenters.length);
    const weights = new Array(patchCenters.length);
    const patchIndices = patchCenters.map((_, i) => i);
    const patchKD = buildKDTree(patchCenters, patchIndices);
    const isUsedArr = new Array(patchCenters.length).fill(false);
    const nearestPatch = new Uint16Array(meshVertCount + meshBoneCount);
    for (let i = 0; i < meshVertCount; i++) {
      const vec = [meshVerts[i * 3 + 0], meshVerts[i * 3 + 1], meshVerts[i * 3 + 2]];
      const nearestPatchNode = nearestSearch(patchKD, vec);
      isUsedArr[nearestPatchNode.index] = true;
      nearestPatch[i] = nearestPatchNode.index;
    }
    for (let i = 0; i < meshBoneCount; i++) {
      const vec = [meshBones[i * 3 + 0], meshBones[i * 3 + 1], meshBones[i * 3 + 2]];
      const nearestPatchNode = nearestSearch(patchKD, vec);
      isUsedArr[nearestPatchNode.index] = true;
      nearestPatch[i + meshVertCount] = nearestPatchNode.index;
    }
    for (let i = 0; i < patchCenters.length; i++) {
      if (!isUsedArr[i]) {
        continue;
      }
      const centerPos = patchCenters[i];
      const neighbors = knnSearch(controlKD, centerPos, detailsCount);
      const foundNeighborIndices = neighbors.map((n) => n.index);
      for (const important of importantIndices) {
        if (!foundNeighborIndices.includes(important)) {
          foundNeighborIndices.push(important);
        }
      }
      neighborIndices[i] = new Uint16Array(foundNeighborIndices);
    }
    const A_array = new Array(patchCenters.length);
    for (let p = 0; p < patchCenters.length; p++) {
      const patchNeighborIndices = neighborIndices[p];
      if (!patchNeighborIndices) continue;
      const K = patchNeighborIndices.length;
      const positions = new Array(patchNeighborIndices.length);
      for (let i = 0; i < patchNeighborIndices.length; i++) {
        const j = patchNeighborIndices[i];
        const refPos = [refVerts[j * 3 + 0], refVerts[j * 3 + 1], refVerts[j * 3 + 2]];
        positions[i] = refPos;
      }
      const A = new Array(K);
      for (let i = 0; i < K; i++) {
        A[i] = new Float32Array(K);
      }
      for (let i = 0; i < K; i++) {
        const [pix, piy, piz] = positions[i];
        for (let j = i + 1; j < K; j++) {
          const [pjx, pjy, pjz] = positions[j];
          const dist = Math.sqrt((pix - pjx) * (pix - pjx) + (piy - pjy) * (piy - pjy) + (piz - pjz) * (piz - pjz));
          A[i][j] = dist;
          A[j][i] = dist;
        }
        A[i][i] = epsilon;
      }
      A_array[p] = A;
    }
    for (let p = 0; p < patchCenters.length; p++) {
      if (!isUsedArr[p]) {
        continue;
      }
      const patchNeighborIndices = neighborIndices[p];
      const K = patchNeighborIndices.length;
      const usedRef = new Array(K);
      const usedDist = new Array(K);
      for (let i = 0; i < K; i++) {
        const idx = patchNeighborIndices[i];
        const j = idx;
        const refPos = [refVerts[j * 3 + 0], refVerts[j * 3 + 1], refVerts[j * 3 + 2]];
        const distPos = [distVerts[j * 3 + 0], distVerts[j * 3 + 1], distVerts[j * 3 + 2]];
        usedRef[i] = refPos;
        usedDist[i] = distPos;
      }
      const A = A_array[p];
      const bx = new Float32Array(K);
      const by = new Float32Array(K);
      const bz = new Float32Array(K);
      for (let i = 0; i < K; i++) {
        const dr = usedDist[i];
        const rr = usedRef[i];
        bx[i] = dr[0] - rr[0];
        by[i] = dr[1] - rr[1];
        bz[i] = dr[2] - rr[2];
      }
      const Abuffers = A.map((r) => r.buffer);
      weights[p] = new Float32Array(patchRBFWorkerFunc([Abuffers, bx.buffer, by.buffer, bz.buffer]));
    }
    const neighborIndicesBuf = neighborIndices.map((a) => {
      return a.buffer;
    });
    const weightsBuf = weights.map((a) => {
      return a.buffer;
    });
    return [neighborIndicesBuf, weightsBuf, nearestPatch.buffer];
  }
  const WorkerTypeToFunction = {
    "patchRBF": patchRBFWorkerFunc,
    "RBFDeformerSolveAsync": RBFDeformerSolveAsync
  };
  function getWorkerOnMessage() {
    return function(event) {
      const [id, type, data] = event.data;
      const func = WorkerTypeToFunction[type];
      self.postMessage([id, func(data)]);
    };
  }
  onmessage = getWorkerOnMessage();
})();
