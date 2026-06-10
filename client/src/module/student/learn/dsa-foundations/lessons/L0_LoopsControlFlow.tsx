
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
C
o
d
e
B
l
o
c
k
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
L
o
o
p
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
b
o
o
l
e
a
n
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
o
u
t
p
u
t
:
 
n
u
m
b
e
r
[
]
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
u
i
l
d
C
o
u
n
t
U
p
(
)
:
 
L
o
o
p
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
L
o
o
p
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
i
:
 
"
,
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
W
e
 
a
r
e
 
a
b
o
u
t
 
t
o
 
s
t
a
r
t
.
 
i
 
w
i
l
l
 
c
o
u
n
t
 
f
r
o
m
 
1
 
u
p
 
t
o
 
5
.
"
,
 
o
u
t
p
u
t
:
 
[
]
 
}
)
;


 
 
c
o
n
s
t
 
o
u
t
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
=
 
5
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
c
k
:
 
i
s
 
i
 
(
$
{
i
}
)
 
≤
 
5
?
 
Y
e
s
,
 
e
n
t
e
r
 
t
h
e
 
b
o
d
y
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
o
u
t
.
p
u
s
h
(
i
)
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
p
r
i
n
t
(
$
{
i
}
)
,
 
a
d
d
e
d
 
t
o
 
o
u
t
p
u
t
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
:
 
6
 
}
,
 
m
e
s
s
a
g
e
:
 
"
C
h
e
c
k
:
 
i
s
 
i
 
(
6
)
 
≤
 
5
?
 
N
o
,
 
l
o
o
p
 
e
x
i
t
s
.
"
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
:
 
6
 
}
,
 
m
e
s
s
a
g
e
:
 
"
D
o
n
e
!
 
W
e
 
p
r
i
n
t
e
d
 
5
 
n
u
m
b
e
r
s
 
i
n
 
5
 
i
t
e
r
a
t
i
o
n
s
.
"
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
E
v
e
n
S
k
i
p
(
)
:
 
L
o
o
p
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
L
o
o
p
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
i
:
 
"
,
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
W
e
 
w
i
l
l
 
l
o
o
p
 
i
 
f
r
o
m
 
0
 
t
o
 
6
 
a
n
d
 
p
r
i
n
t
 
o
n
l
y
 
e
v
e
n
 
n
u
m
b
e
r
s
.
"
,
 
o
u
t
p
u
t
:
 
[
]
 
}
)
;


 
 
c
o
n
s
t
 
o
u
t
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
=
 
6
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
i
 
=
 
$
{
i
}
:
 
e
n
t
e
r
i
n
g
 
l
o
o
p
 
b
o
d
y
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
i
f
 
(
i
 
%
 
2
 
!
=
=
 
0
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
$
{
i
}
 
%
 
2
 
=
 
$
{
i
 
%
 
2
}
 
(
o
d
d
)
,
 
c
o
n
t
i
n
u
e
 
s
k
i
p
s
 
t
o
 
n
e
x
t
 
i
t
e
r
a
t
i
o
n
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
$
{
i
}
 
%
 
2
 
=
 
0
 
(
e
v
e
n
)
,
 
p
r
i
n
t
(
$
{
i
}
)
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
 
 
o
u
t
.
p
u
s
h
(
i
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
P
r
i
n
t
e
d
 
$
{
i
}
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
}


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
i
:
 
7
 
}
,
 
m
e
s
s
a
g
e
:
 
"
L
o
o
p
 
f
i
n
i
s
h
e
d
.
 
O
n
l
y
 
e
v
e
n
 
n
u
m
b
e
r
s
 
w
e
r
e
 
p
r
i
n
t
e
d
.
"
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
M
u
l
t
T
a
b
l
e
(
)
:
 
L
o
o
p
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
L
o
o
p
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
i
:
 
"
,
"
,
 
j
:
 
"
,
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
N
e
s
t
e
d
 
l
o
o
p
s
:
 
o
u
t
e
r
 
i
 
a
n
d
 
i
n
n
e
r
 
j
 
b
o
t
h
 
g
o
 
f
r
o
m
 
1
 
t
o
 
3
.
"
,
 
o
u
t
p
u
t
:
 
[
]
 
}
)
;


 
 
c
o
n
s
t
 
o
u
t
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
=
 
3
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
,
 
j
:
 
"
,
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
O
u
t
e
r
 
l
o
o
p
:
 
i
 
=
 
$
{
i
}
.
 
T
h
e
 
i
n
n
e
r
 
l
o
o
p
 
w
i
l
l
 
n
o
w
 
r
u
n
 
f
u
l
l
y
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
1
;
 
j
 
<
=
 
3
;
 
j
+
+
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
j
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
n
e
r
:
 
j
 
=
 
$
{
j
}
.
 
C
o
m
p
u
t
i
n
g
 
$
{
i
}
 
×
 
$
{
j
}
 
=
 
$
{
i
 
*
 
j
}
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
 
 
o
u
t
.
p
u
s
h
(
i
 
*
 
j
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
"
i
×
j
"
:
 
i
 
*
 
j
 
}
,
 
m
e
s
s
a
g
e
:
 
`
p
r
i
n
t
(
$
{
i
 
*
 
j
}
)
,
 
a
p
p
e
n
d
e
d
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
 
 
}


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
i
:
 
4
,
 
j
:
 
4
 
}
,
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
!
 
$
{
o
u
t
.
l
e
n
g
t
h
}
 
p
r
o
d
u
c
t
s
 
p
r
i
n
t
e
d
 
(
3
 
o
u
t
e
r
 
×
 
3
 
i
n
n
e
r
)
.
`
,
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
]
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
r
e
s
e
t
 
c
o
n
f
i
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
e
s
e
t
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
p
s
e
u
d
o
:
 
s
t
r
i
n
g
[
]
;


 
 
b
u
i
l
d
:
 
(
)
 
=
>
 
L
o
o
p
F
r
a
m
e
[
]
;


}




c
o
n
s
t
 
P
R
E
S
E
T
S
:
 
P
r
e
s
e
t
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
c
o
u
n
t
u
p
"
,


 
 
 
 
l
a
b
e
l
:
 
"
C
o
u
n
t
 
1
.
.
5
"
,


 
 
 
 
p
s
e
u
d
o
:
 
[


 
 
 
 
 
 
"
f
o
r
 
i
 
i
n
 
1
.
.
5
:
"
,


 
 
 
 
 
 
"
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
"
#
 
l
o
o
p
 
e
n
d
s
"
,


 
 
 
 
]
,


 
 
 
 
b
u
i
l
d
:
 
b
u
i
l
d
C
o
u
n
t
U
p
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
e
v
e
n
"
,


 
 
 
 
l
a
b
e
l
:
 
"
E
v
e
n
 
n
u
m
b
e
r
s
"
,


 
 
 
 
p
s
e
u
d
o
:
 
[


 
 
 
 
 
 
"
f
o
r
 
i
 
i
n
 
0
.
.
6
:
"
,


 
 
 
 
 
 
"
 
 
i
f
 
i
 
%
 
2
 
!
=
 
0
:
"
,


 
 
 
 
 
 
"
 
 
 
 
c
o
n
t
i
n
u
e
"
,


 
 
 
 
 
 
"
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
"
#
 
l
o
o
p
 
e
n
d
s
"
,


 
 
 
 
]
,


 
 
 
 
b
u
i
l
d
:
 
b
u
i
l
d
E
v
e
n
S
k
i
p
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
n
e
s
t
e
d
"
,


 
 
 
 
l
a
b
e
l
:
 
"
M
u
l
t
i
p
l
i
c
a
t
i
o
n
 
t
a
b
l
e
"
,


 
 
 
 
p
s
e
u
d
o
:
 
[


 
 
 
 
 
 
"
f
o
r
 
i
 
i
n
 
1
.
.
3
:
"
,


 
 
 
 
 
 
"
 
 
f
o
r
 
j
 
i
n
 
1
.
.
3
:
"
,


 
 
 
 
 
 
"
 
 
 
 
r
e
s
u
l
t
 
=
 
i
 
*
 
j
"
,


 
 
 
 
 
 
"
 
 
 
 
p
r
i
n
t
(
r
e
s
u
l
t
)
"
,


 
 
 
 
 
 
"
#
 
d
o
n
e
"
,


 
 
 
 
]
,


 
 
 
 
b
u
i
l
d
:
 
b
u
i
l
d
M
u
l
t
T
a
b
l
e
,


 
 
}
,


]
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
p
r
e
s
e
t
I
d
,
 
s
e
t
P
r
e
s
e
t
I
d
]
 
=
 
u
s
e
S
t
a
t
e
(
"
c
o
u
n
t
u
p
"
)
;


 
 
c
o
n
s
t
 
p
r
e
s
e
t
 
=
 
P
R
E
S
E
T
S
.
f
i
n
d
(
(
p
)
 
=
>
 
p
.
i
d
 
=
=
=
 
p
r
e
s
e
t
I
d
)
 
?
?
 
P
R
E
S
E
T
S
[
0
]
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
r
e
s
e
t
.
b
u
i
l
d
(
)
,
 
[
p
r
e
s
e
t
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
,
 
7
5
0
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
L
o
o
p
 
S
t
e
p
p
e
r
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
l
o
o
p
 
e
x
a
m
p
l
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
P
R
E
S
E
T
S
.
m
a
p
(
(
p
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
p
r
e
s
e
t
I
d
 
=
=
=
 
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
P
r
e
s
e
t
I
d
(
p
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
r
e
s
e
t
.
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
[
"
i
"
,
 
"
j
"
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
l
o
o
p
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
o
u
t
p
u
t
 
s
o
 
f
a
r


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
m
i
n
-
h
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
o
u
t
p
u
t
 
?
?
 
[
]
)
.
m
a
p
(
(
v
,
 
i
d
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
w
-
9
 
h
-
9
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
o
u
t
p
u
t
 
?
?
 
[
]
)
.
l
e
n
g
t
h
 
=
=
=
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
f
o
n
t
-
m
o
n
o
 
i
t
a
l
i
c
"
>
n
o
t
h
i
n
g
 
p
r
i
n
t
e
d
 
y
e
t
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
l
o
o
p
s
 
&
 
c
o
n
t
r
o
l
 
f
l
o
w
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
D
o
 
t
h
i
s
 
a
g
a
i
n
,
 
w
i
t
h
o
u
t
 
c
o
p
y
-
p
a
s
t
i
n
g
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
A
 
l
o
o
p
 
i
s
 
h
o
w
 
w
e
 
t
e
l
l
 
t
h
e
 
c
o
m
p
u
t
e
r
 
"
d
o
 
t
h
i
s
 
a
g
a
i
n
"
 
w
i
t
h
o
u
t
 
c
o
p
y
-
p
a
s
t
i
n
g
 
t
h
e
 
s
a
m
e


 
 
 
 
 
 
 
 
 
 
i
n
s
t
r
u
c
t
i
o
n
 
t
e
n
 
t
i
m
e
s
.
 
I
n
s
t
e
a
d
,
 
y
o
u
 
w
r
i
t
e
 
t
h
e
 
i
n
s
t
r
u
c
t
i
o
n
 
o
n
c
e
 
a
n
d
 
s
a
y
 
h
o
w
 
m
a
n
y
 
t
i
m
e
s


 
 
 
 
 
 
 
 
 
 
t
o
 
r
e
p
e
a
t
 
i
t
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
t
h
r
e
e
 
f
l
a
v
o
r
s
 
o
f
 
l
o
o
p
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
w
h
e
n
 
y
o
u
 
k
n
o
w
 
h
o
w
 
m
a
n
y
 
t
i
m
e
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
s
e
 
a
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
<
/
I
n
l
i
n
e
C
o
d
e
>
 
l
o
o
p
 
w
h
e
n
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
r
e
p
e
t
i
t
i
o
n
s
 
i
s
 
k
n
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
e
f
o
r
e
 
t
h
e
 
l
o
o
p
 
s
t
a
r
t
s
.
 
"
P
r
i
n
t
 
t
h
e
 
n
u
m
b
e
r
s
 
1
 
t
h
r
o
u
g
h
 
1
0
"
 
i
s
 
a
 
c
l
a
s
s
i
c
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
<
/
I
n
l
i
n
e
C
o
d
e
>
 
s
i
t
u
a
t
i
o
n
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
"
>
{
"
f
o
r
 
i
 
i
n
 
1
.
.
5
:
\
n
 
 
p
r
i
n
t
(
i
)
 
 
 
#
 
p
r
i
n
t
s
 
1
,
 
2
,
 
3
,
 
4
,
 
5
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
w
h
i
l
e
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
w
h
e
n
 
y
o
u
 
s
t
o
p
 
b
a
s
e
d
 
o
n
 
a
 
c
o
n
d
i
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
s
e
 
a
 
<
I
n
l
i
n
e
C
o
d
e
>
w
h
i
l
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
l
o
o
p
 
w
h
e
n
 
y
o
u
 
d
o
 
n
o
t
 
k
n
o
w
 
t
h
e
 
c
o
u
n
t
 
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
d
v
a
n
c
e
.
 
"
K
e
e
p
 
r
e
a
d
i
n
g
 
i
n
p
u
t
 
u
n
t
i
l
 
t
h
e
 
u
s
e
r
 
t
y
p
e
s
 
'
q
u
i
t
'
"
 
i
s
 
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
w
h
i
l
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
s
i
t
u
a
t
i
o
n
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
"
>
{
"
w
h
i
l
e
 
i
n
p
u
t
 
!
=
 
'
q
u
i
t
'
:
\
n
 
 
i
n
p
u
t
 
=
 
r
e
a
d
(
)
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
s
t
e
d
 
l
o
o
p
s
,
 
a
 
l
o
o
p
 
i
n
s
i
d
e
 
a
 
l
o
o
p


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
c
a
n
 
p
u
t
 
a
 
l
o
o
p
 
i
n
s
i
d
e
 
a
n
o
t
h
e
r
 
l
o
o
p
.
 
T
h
e
 
i
n
n
e
r
 
l
o
o
p
 
r
u
n
s
 
c
o
m
p
l
e
t
e
l
y
 
f
o
r
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
n
g
l
e
 
s
t
e
p
 
o
f
 
t
h
e
 
o
u
t
e
r
 
l
o
o
p
.
 
A
 
3
-
s
t
e
p
 
o
u
t
e
r
 
l
o
o
p
 
w
i
t
h
 
a
 
3
-
s
t
e
p
 
i
n
n
e
r
 
l
o
o
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
u
n
s
 
t
h
e
 
b
o
d
y
 
3
 
×
 
3
 
=
 
9
 
t
i
m
e
s
 
t
o
t
a
l
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
"
>
{
"
f
o
r
 
i
 
i
n
 
1
.
.
3
:
\
n
 
 
f
o
r
 
j
 
i
n
 
1
.
.
3
:
\
n
 
 
 
 
p
r
i
n
t
(
i
 
*
 
j
)
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
J
u
m
p
i
n
g
 
o
u
t
 
e
a
r
l
y
:
 
b
r
e
a
k
 
a
n
d
 
c
o
n
t
i
n
u
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
b
r
e
a
k
<
/
I
n
l
i
n
e
C
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
,
 
j
u
m
p
 
o
u
t
 
o
f
 
t
h
e
 
l
o
o
p
 
i
m
m
e
d
i
a
t
e
l
y
.
 
T
h
e
 
r
e
m
a
i
n
i
n
g
 
i
t
e
r
a
t
i
o
n
s
 
a
r
e
 
s
k
i
p
p
e
d
 
e
n
t
i
r
e
l
y
.


 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
n
k
 
o
f
 
i
t
 
a
s
 
p
u
l
l
i
n
g
 
t
h
e
 
f
i
r
e
 
a
l
a
r
m
:
 
e
v
e
r
y
o
n
e
 
l
e
a
v
e
s
 
t
h
e
 
b
u
i
l
d
i
n
g
 
r
i
g
h
t
 
n
o
w
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
{
"
f
o
r
 
i
 
i
n
 
1
.
.
1
0
:
\
n
 
 
i
f
 
i
 
=
=
 
4
:
\
n
 
 
 
 
b
r
e
a
k
 
 
 
 
 
 
#
 
s
t
o
p
s
 
a
t
 
4
\
n
 
 
p
r
i
n
t
(
i
)
 
 
 
#
 
p
r
i
n
t
s
 
1
,
 
2
,
 
3
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
c
o
n
t
i
n
u
e
<
/
I
n
l
i
n
e
C
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
,
 
s
k
i
p
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
i
s
 
o
n
e
 
i
t
e
r
a
t
i
o
n
,
 
t
h
e
n
 
m
o
v
e
 
t
o
 
t
h
e
 
n
e
x
t
.
 
T
h
i
n
k
 
o
f
 
i
t
 
a
s


 
 
 
 
 
 
 
 
 
 
 
 
s
k
i
p
p
i
n
g
 
a
 
q
u
e
s
t
i
o
n
 
o
n
 
a
n
 
e
x
a
m
 
a
n
d
 
m
o
v
i
n
g
 
t
o
 
t
h
e
 
n
e
x
t
 
o
n
e
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>
{
"
f
o
r
 
i
 
i
n
 
1
.
.
5
:
\
n
 
 
i
f
 
i
 
=
=
 
3
:
\
n
 
 
 
 
c
o
n
t
i
n
u
e
 
 
 
#
 
s
k
i
p
 
3
\
n
 
 
p
r
i
n
t
(
i
)
 
 
 
#
 
p
r
i
n
t
s
 
1
,
 
2
,
 
4
,
 
5
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
d
e
n
t
a
t
i
o
n
 
d
e
f
i
n
e
s
 
w
h
a
t
 
i
s
 
i
n
s
i
d
e
 
t
h
e
 
l
o
o
p
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
 
P
y
t
h
o
n
 
a
n
d
 
p
s
e
u
d
o
c
o
d
e
,
 
t
h
e
 
b
o
d
y
 
o
f
 
a
 
l
o
o
p
 
i
s
 
t
h
e
 
i
n
d
e
n
t
e
d
 
b
l
o
c
k
 
b
e
l
o
w
 
t
h
e
 
l
o
o
p


 
 
 
 
 
 
 
 
 
 
h
e
a
d
e
r
.
 
I
f
 
a
 
l
i
n
e
 
i
s
 
n
o
t
 
i
n
d
e
n
t
e
d
,
 
i
t
 
r
u
n
s
 
a
f
t
e
r
 
t
h
e
 
l
o
o
p
 
f
i
n
i
s
h
e
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
"
>
{
"
f
o
r
 
i
 
i
n
 
1
.
.
3
:
\
n
 
 
p
r
i
n
t
(
i
)
 
 
 
#
 
i
n
s
i
d
e
,
 
r
u
n
s
 
3
 
t
i
m
e
s
\
n
p
r
i
n
t
(
'
d
o
n
e
'
)
 
#
 
o
u
t
s
i
d
e
,
 
r
u
n
s
 
o
n
c
e
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
H
o
w
 
m
a
n
y
 
t
i
m
e
s
 
d
o
e
s
 
t
h
e
 
b
o
d
y
 
o
f
 
t
h
i
s
 
l
o
o
p
 
r
u
n
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
4
:
\
n
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
3
 
t
i
m
e
s
"
,
 
"
4
 
t
i
m
e
s
"
,
 
"
5
 
t
i
m
e
s
"
,
 
"
i
n
f
i
n
i
t
e
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
,
 
3
,
 
t
h
a
t
 
i
s
 
4
 
v
a
l
u
e
s
,
 
s
o
 
t
h
e
 
b
o
d
y
 
r
u
n
s
 
4
 
t
i
m
e
s
.
 
T
h
e
 
r
a
n
g
e
 
0
.
.
4
 
m
e
a
n
s
 
0
,
 
1
,
 
2
,
 
3
 
(
t
h
e
 
e
n
d
 
i
s
 
e
x
c
l
u
d
e
d
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
W
h
a
t
 
d
o
e
s
 
t
h
i
s
 
l
o
o
p
 
p
r
i
n
t
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
1
.
.
5
:
\
n
 
 
i
f
 
i
 
=
=
 
3
:
\
n
 
 
 
 
c
o
n
t
i
n
u
e
\
n
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
 
2
 
3
 
4
"
,
 
"
1
 
2
 
4
"
,
 
"
1
 
2
 
4
 
5
"
,
 
"
1
 
2
 
3
 
4
 
5
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
c
o
n
t
i
n
u
e
 
s
k
i
p
s
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
e
 
b
o
d
y
 
w
h
e
n
 
i
 
=
 
3
,
 
s
o
 
3
 
i
s
 
n
e
v
e
r
 
p
r
i
n
t
e
d
.
 
T
h
e
 
l
o
o
p
 
s
t
i
l
l
 
v
i
s
i
t
s
 
i
 
=
 
4
 
a
n
d
 
i
 
=
 
5
 
a
f
t
e
r
 
t
h
e
 
s
k
i
p
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
A
t
 
w
h
a
t
 
v
a
l
u
e
 
o
f
 
i
 
d
o
e
s
 
t
h
i
s
 
l
o
o
p
 
s
t
o
p
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
1
.
.
1
0
:
\
n
 
 
i
f
 
i
 
*
 
i
 
>
 
2
0
:
\
n
 
 
 
 
b
r
e
a
k
\
n
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
i
 
=
 
4
"
,
 
"
i
 
=
 
5
"
,
 
"
i
 
=
 
6
"
,
 
"
i
 
=
 
1
0
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
5
 
×
 
5
 
=
 
2
5
 
>
 
2
0
,
 
s
o
 
b
r
e
a
k
 
f
i
r
e
s
 
w
h
e
n
 
i
 
=
 
5
.
 
T
h
e
 
l
o
o
p
 
p
r
i
n
t
s
 
1
,
 
2
,
 
3
,
 
4
 
a
n
d
 
t
h
e
n
 
e
x
i
t
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
H
o
w
 
m
a
n
y
 
t
o
t
a
l
 
i
t
e
r
a
t
i
o
n
s
 
d
o
e
s
 
t
h
e
 
b
o
d
y
 
o
f
 
t
h
e
 
i
n
n
e
r
 
l
o
o
p
 
r
u
n
?
"
,


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
1
.
.
3
:
\
n
 
 
f
o
r
 
j
 
i
n
 
1
.
.
4
:
\
n
 
 
 
 
p
r
i
n
t
(
i
,
 
j
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
6
"
,
 
"
7
"
,
 
"
1
2
"
,
 
"
3
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
T
h
e
 
o
u
t
e
r
 
l
o
o
p
 
r
u
n
s
 
3
 
t
i
m
e
s
 
(
i
 
=
 
1
,
 
2
,
 
3
)
.
 
E
a
c
h
 
t
i
m
e
,
 
t
h
e
 
i
n
n
e
r
 
l
o
o
p
 
r
u
n
s
 
4
 
t
i
m
e
s
 
(
j
 
=
 
1
,
 
2
,
 
3
,
 
4
,
 
b
u
t
 
w
a
i
t
,
 
1
.
.
4
 
i
s
 
3
 
v
a
l
u
e
s
:
 
1
,
 
2
,
 
3
)
.
 
O
u
t
e
r
 
3
 
×
 
i
n
n
e
r
 
3
 
=
 
9
.
 
A
c
t
u
a
l
l
y
 
t
h
e
 
i
n
n
e
r
 
r
a
n
g
e
 
1
.
.
4
 
g
i
v
e
s
 
j
 
=
 
1
,
 
2
,
 
3
 
(
3
 
v
a
l
u
e
s
)
.
 
3
 
×
 
4
 
=
 
1
2
 
i
f
 
1
.
.
4
 
i
s
 
e
x
c
l
u
s
i
v
e
-
e
n
d
 
b
u
t
 
g
i
v
e
s
 
4
 
v
a
l
u
e
s
.
 
H
e
r
e
 
w
e
 
t
r
e
a
t
 
1
.
.
4
 
a
s
 
4
 
v
a
l
u
e
s
 
(
1
,
 
2
,
 
3
,
 
4
)
,
 
s
o
 
3
 
×
 
4
 
=
 
1
2
.
"
,


 
 
 
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
]
 
=
 
u
s
e
S
t
a
t
e
<
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
T
r
a
c
e
 
e
a
c
h
 
l
o
o
p
 
i
n
 
y
o
u
r
 
h
e
a
d
 
b
e
f
o
r
e
 
p
i
c
k
i
n
g
 
a
n
 
a
n
s
w
e
r
.
 
C
o
u
n
t
 
i
t
e
r
a
t
i
o
n
s
 
c
a
r
e
f
u
l
l
y
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
2
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
p
r
o
m
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
3
"
>
{
p
.
s
n
i
p
p
e
t
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
o
s
e
-
5
0
0
 
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
o
s
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
p
.
e
x
p
l
a
i
n
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
O
f
f
-
b
y
-
o
n
e
 
e
r
r
o
r
s
:
 
t
h
e
 
m
o
s
t
 
c
o
m
m
o
n
 
b
e
g
i
n
n
e
r
 
b
u
g
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
A
n
 
o
f
f
-
b
y
-
o
n
e
 
e
r
r
o
r
 
(
O
B
O
E
)
 
i
s
 
w
h
e
n
 
y
o
u
r
 
l
o
o
p
 
r
u
n
s
 
o
n
e
 
t
i
m
e
 
t
o
o
 
m
a
n
y
 
o
r
 
o
n
e
 
t
i
m
e
 
t
o
o
 
f
e
w
.


 
 
 
 
 
 
 
 
 
 
I
t
 
i
s
 
t
h
e
 
s
i
n
g
l
e
 
m
o
s
t
 
f
r
e
q
u
e
n
t
 
b
u
g
 
i
n
 
l
o
o
p
-
b
a
s
e
d
 
c
o
d
e
.
 
T
h
r
e
e
 
c
o
m
m
o
n
 
b
o
u
n
d
a
r
i
e
s
 
t
o
 
k
e
e
p


 
 
 
 
 
 
 
 
 
 
s
t
r
a
i
g
h
t
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
R
a
n
g
e
 
n
o
t
a
t
i
o
n
"
,
 
"
V
a
l
u
e
s
 
v
i
s
i
t
e
d
"
,
 
"
C
o
u
n
t
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
r
a
n
g
e
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
"
,
 
v
a
l
s
:
 
"
0
,
 
1
,
 
…
,
 
n
-
1
"
,
 
c
o
u
n
t
:
 
"
n
 
v
a
l
u
e
s
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
r
a
n
g
e
:
 
"
f
o
r
 
i
 
i
n
 
1
.
.
n
"
,
 
v
a
l
s
:
 
"
1
,
 
2
,
 
…
,
 
n
-
1
"
,
 
c
o
u
n
t
:
 
"
n
-
1
 
v
a
l
u
e
s
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
r
a
n
g
e
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
=
n
"
,
 
v
a
l
s
:
 
"
0
,
 
1
,
 
…
,
 
n
"
,
 
c
o
u
n
t
:
 
"
n
+
1
 
v
a
l
u
e
s
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
r
.
r
a
n
g
e
}
 
c
l
a
s
s
N
a
m
e
=
"
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
2
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
{
r
.
r
a
n
g
e
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
2
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
{
r
.
v
a
l
s
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
2
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
{
r
.
c
o
u
n
t
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
A
l
w
a
y
s
 
a
s
k
 
y
o
u
r
s
e
l
f
:
 
"
D
o
e
s
 
t
h
e
 
l
a
s
t
 
v
a
l
u
e
 
I
 
w
a
n
t
 
g
e
t
 
i
n
c
l
u
d
e
d
?
"
 
T
h
e
n
 
p
i
c
k
 
t
h
e


 
 
 
 
 
 
 
 
 
 
b
o
u
n
d
a
r
y
 
t
h
a
t
 
g
i
v
e
s
 
t
h
e
 
r
i
g
h
t
 
a
n
s
w
e
r
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
L
o
o
p
 
i
n
v
a
r
i
a
n
t
s
:
 
t
h
e
 
r
e
a
s
o
n
i
n
g
 
t
o
o
l
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
A
 
l
o
o
p
 
i
n
v
a
r
i
a
n
t
 
(
i
n
-
V
A
I
R
-
e
e
-
a
n
t
)
 
i
s
 
a
 
p
r
o
p
e
r
t
y
 
t
h
a
t
 
i
s
 
t
r
u
e
 
a
t
 
t
h
e
 
s
t
a
r
t
 
o
f
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
s
i
n
g
l
e
 
i
t
e
r
a
t
i
o
n
.
 
P
r
o
f
e
s
s
i
o
n
a
l
s
 
u
s
e
 
t
h
e
m
 
t
o
 
p
r
o
v
e
 
l
o
o
p
s
 
a
r
e
 
c
o
r
r
e
c
t
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
E
x
a
m
p
l
e
:
 
i
n
 
a
 
l
o
o
p
 
t
h
a
t
 
c
o
m
p
u
t
e
s
 
t
h
e
 
s
u
m
 
o
f
 
a
n
 
a
r
r
a
y
,
 
t
h
e
 
i
n
v
a
r
i
a
n
t
 
i
s
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
e
m
>
"
a
f
t
e
r
 
i
t
e
r
a
t
i
o
n
 
i
,
 
t
h
e
 
v
a
r
i
a
b
l
e
 
s
u
m
 
e
q
u
a
l
s
 
t
h
e
 
s
u
m
 
o
f
 
t
h
e
 
f
i
r
s
t
 
i
 
e
l
e
m
e
n
t
s
.
"
<
/
e
m
>


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
Y
o
u
 
d
o
 
n
o
t
 
n
e
e
d
 
t
o
 
w
r
i
t
e
 
t
h
i
s
 
d
o
w
n
 
i
n
 
c
o
d
e
,
 
b
u
t
 
t
h
i
n
k
i
n
g
 
"
w
h
a
t
 
i
s
 
a
l
w
a
y
s
 
t
r
u
e
 
h
e
r
e
?
"


 
 
 
 
 
 
 
 
 
 
p
r
e
v
e
n
t
s
 
m
o
s
t
 
l
o
g
i
c
 
b
u
g
s
 
b
e
f
o
r
e
 
t
h
e
y
 
h
a
p
p
e
n
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
f
i
n
i
t
e
 
l
o
o
p
s
:
 
w
h
e
n
 
t
h
e
 
c
o
n
d
i
t
i
o
n
 
n
e
v
e
r
 
b
e
c
o
m
e
s
 
f
a
l
s
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
I
f
 
t
h
e
 
l
o
o
p
 
c
o
n
d
i
t
i
o
n
 
n
e
v
e
r
 
b
e
c
o
m
e
s
 
<
I
n
l
i
n
e
C
o
d
e
>
f
a
l
s
e
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
t
h
e
 
l
o
o
p
 
r
u
n
s


 
 
 
 
 
 
 
 
 
 
f
o
r
e
v
e
r
 
a
n
d
 
y
o
u
r
 
p
r
o
g
r
a
m
 
h
a
n
g
s
.
 
T
h
i
s
 
i
s
 
c
a
l
l
e
d
 
a
n
 
i
n
f
i
n
i
t
e
 
l
o
o
p
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
2
"
>
{
"
#
 
d
a
n
g
e
r
:
 
i
 
n
e
v
e
r
 
c
h
a
n
g
e
s
\
n
i
 
=
 
0
\
n
w
h
i
l
e
 
i
 
<
 
1
0
:
\
n
 
 
p
r
i
n
t
(
'
s
t
u
c
k
'
)
"
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
A
l
w
a
y
s
 
m
a
k
e
 
s
u
r
e
 
y
o
u
r
 
l
o
o
p
 
v
a
r
i
a
b
l
e
 
i
s
 
m
o
v
i
n
g
 
t
o
w
a
r
d
 
t
h
e
 
e
x
i
t
 
c
o
n
d
i
t
i
o
n
.
 
F
o
r
 
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
w
h
i
l
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
l
o
o
p
,
 
d
o
u
b
l
e
-
c
h
e
c
k
 
t
h
a
t
 
s
o
m
e
t
h
i
n
g
 
i
n
s
i
d
e
 
t
h
e
 
b
o
d
y


 
 
 
 
 
 
 
 
 
 
p
u
s
h
e
s
 
y
o
u
 
t
o
w
a
r
d
 
<
I
n
l
i
n
e
C
o
d
e
>
f
a
l
s
e
<
/
I
n
l
i
n
e
C
o
d
e
>
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
H
a
l
f
 
o
f
 
a
l
l
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
s
 
b
o
i
l
 
d
o
w
n
 
t
o
:
 
p
i
c
k
 
t
h
e
 
r
i
g
h
t
 
l
o
o
p
,
 
w
i
t
h
 
t
h
e
 
r
i
g
h
t


 
 
 
 
 
 
 
 
b
o
u
n
d
a
r
i
e
s
.
 
S
p
e
n
d
 
e
x
t
r
a
 
t
i
m
e
 
t
r
a
c
i
n
g
 
l
o
o
p
 
b
o
u
n
d
a
r
i
e
s
 
b
y
 
h
a
n
d
,
 
i
t
 
w
i
l
l
 
s
a
v
e
 
y
o
u
 
f
r
o
m


 
 
 
 
 
 
 
 
o
f
f
-
b
y
-
o
n
e
 
b
u
g
s
 
i
n
 
t
i
m
e
d
 
i
n
t
e
r
v
i
e
w
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
E
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
0
_
L
o
o
p
s
C
o
n
t
r
o
l
F
l
o
w
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
H
o
w
 
m
a
n
y
 
t
i
m
e
s
 
d
o
e
s
 
t
h
i
s
 
l
o
o
p
 
p
r
i
n
t
?
\
n
\
n
f
o
r
 
i
 
i
n
 
0
.
.
5
:
\
n
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
4
"
,
 
"
5
"
,
 
"
6
"
,
 
"
i
n
f
i
n
i
t
e
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
0
.
.
5
 
m
e
a
n
s
 
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
,
 
3
,
 
4
,
 
f
i
v
e
 
v
a
l
u
e
s
 
t
o
t
a
l
.
 
T
h
e
 
e
n
d
 
v
a
l
u
e
 
5
 
i
s
 
e
x
c
l
u
d
e
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
k
e
y
w
o
r
d
 
s
k
i
p
s
 
t
h
e
 
c
u
r
r
e
n
t
 
i
t
e
r
a
t
i
o
n
 
a
n
d
 
m
o
v
e
s
 
t
o
 
t
h
e
 
n
e
x
t
 
o
n
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
b
r
e
a
k
"
,
 
"
r
e
t
u
r
n
"
,
 
"
c
o
n
t
i
n
u
e
"
,
 
"
s
k
i
p
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
c
o
n
t
i
n
u
e
 
j
u
m
p
s
 
t
o
 
t
h
e
 
n
e
x
t
 
i
t
e
r
a
t
i
o
n
 
w
i
t
h
o
u
t
 
r
u
n
n
i
n
g
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
e
 
l
o
o
p
 
b
o
d
y
.
 
b
r
e
a
k
 
e
x
i
t
s
 
t
h
e
 
l
o
o
p
 
e
n
t
i
r
e
l
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
Y
o
u
 
w
a
n
t
 
t
o
 
r
e
a
d
 
u
s
e
r
 
i
n
p
u
t
 
u
n
t
i
l
 
t
h
e
y
 
t
y
p
e
 
'
e
x
i
t
'
.
 
W
h
i
c
h
 
l
o
o
p
 
f
i
t
s
 
b
e
s
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
f
o
r
 
l
o
o
p
,
 
b
e
c
a
u
s
e
 
w
e
 
k
n
o
w
 
t
h
e
 
c
o
u
n
t
 
i
n
 
a
d
v
a
n
c
e
"
,


 
 
 
 
 
 
 
 
"
w
h
i
l
e
 
l
o
o
p
,
 
b
e
c
a
u
s
e
 
w
e
 
d
o
n
'
t
 
k
n
o
w
 
w
h
e
n
 
t
h
e
y
'
l
l
 
t
y
p
e
 
'
e
x
i
t
'
"
,


 
 
 
 
 
 
 
 
"
n
e
s
t
e
d
 
l
o
o
p
,
 
b
e
c
a
u
s
e
 
w
e
 
n
e
e
d
 
t
w
o
 
c
o
u
n
t
e
r
s
"
,


 
 
 
 
 
 
 
 
"
n
o
 
l
o
o
p
 
n
e
e
d
e
d
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
A
 
w
h
i
l
e
 
l
o
o
p
 
i
s
 
i
d
e
a
l
 
w
h
e
n
 
y
o
u
 
s
t
o
p
 
b
a
s
e
d
 
o
n
 
a
 
c
o
n
d
i
t
i
o
n
 
(
i
n
p
u
t
 
=
=
 
'
e
x
i
t
'
)
 
t
h
a
t
 
y
o
u
 
c
a
n
'
t
 
p
r
e
d
i
c
t
 
i
n
 
a
d
v
a
n
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
n
e
s
t
e
d
 
l
o
o
p
 
h
a
s
 
o
u
t
e
r
 
r
a
n
g
e
 
1
.
.
4
 
a
n
d
 
i
n
n
e
r
 
r
a
n
g
e
 
1
.
.
4
.
 
H
o
w
 
m
a
n
y
 
t
o
t
a
l
 
i
n
n
e
r
-
b
o
d
y
 
e
x
e
c
u
t
i
o
n
s
 
o
c
c
u
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
4
"
,
 
"
8
"
,
 
"
9
"
,
 
"
1
6
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
1
.
.
4
 
g
i
v
e
s
 
3
 
v
a
l
u
e
s
 
(
1
,
 
2
,
 
3
)
.
 
O
u
t
e
r
 
3
 
×
 
i
n
n
e
r
 
3
 
=
 
9
 
e
x
e
c
u
t
i
o
n
s
 
t
o
t
a
l
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
h
i
s
 
l
o
o
p
 
h
a
s
 
a
n
 
o
f
f
-
b
y
-
o
n
e
 
e
r
r
o
r
.
 
W
h
a
t
 
d
o
e
s
 
i
t
 
a
c
t
u
a
l
l
y
 
p
r
i
n
t
?
\
n
\
n
f
o
r
 
i
 
i
n
 
1
.
.
n
:
 
 
#
 
n
 
=
 
5
\
n
 
 
p
r
i
n
t
(
i
)
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
P
r
i
n
t
s
 
1
,
 
2
,
 
3
,
 
4
,
 
5
 
(
c
o
r
r
e
c
t
)
"
,


 
 
 
 
 
 
 
 
"
P
r
i
n
t
s
 
1
,
 
2
,
 
3
,
 
4
 
(
o
n
e
 
s
h
o
r
t
)
"
,


 
 
 
 
 
 
 
 
"
P
r
i
n
t
s
 
0
,
 
1
,
 
2
,
 
3
,
 
4
 
(
o
n
e
 
e
a
r
l
y
)
"
,


 
 
 
 
 
 
 
 
"
I
n
f
i
n
i
t
e
 
l
o
o
p
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
1
.
.
5
 
v
i
s
i
t
s
 
1
,
 
2
,
 
3
,
 
4
,
 
t
h
e
 
e
n
d
 
v
a
l
u
e
 
5
 
i
s
 
e
x
c
l
u
d
e
d
,
 
s
o
 
t
h
e
 
l
o
o
p
 
r
u
n
s
 
4
 
t
i
m
e
s
,
 
n
o
t
 
5
.
 
U
s
e
 
1
.
.
=
n
 
o
r
 
1
.
.
n
+
1
 
t
o
 
i
n
c
l
u
d
e
 
n
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
L
o
o
p
s
 
&
 
C
o
n
t
r
o
l
 
F
l
o
w
"


 
 
 
 
 
 
l
e
v
e
l
=
{
0
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
H
a
l
f
 
o
f
 
a
l
l
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
s
 
b
o
i
l
 
d
o
w
n
 
t
o
:
 
p
i
c
k
 
t
h
e
 
r
i
g
h
t
 
l
o
o
p
,
 
w
i
t
h
 
t
h
e
 
r
i
g
h
t
 
b
o
u
n
d
a
r
i
e
s
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
F
u
n
c
t
i
o
n
s
 
&
 
t
h
e
 
C
a
l
l
 
S
t
a
c
k
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


