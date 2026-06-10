
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
 
C
a
s
e
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


 
 
h
i
g
h
l
i
g
h
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


 
 
r
e
s
u
l
t
?
:
 
n
u
m
b
e
r
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
 
 
"
F
i
n
d
 
m
i
s
s
i
n
g
 
n
u
m
b
e
r
 
i
n
 
0
.
.
n
"
 
a
l
g
o
r
i
t
h
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
 
E
x
p
e
c
t
e
d
 
s
u
m
 
=
 
n
*
(
n
+
1
)
/
2
;
 
a
c
t
u
a
l
 
s
u
m
 
=
 
s
u
m
 
o
f
 
a
r
r
a
y
;
 
m
i
s
s
i
n
g
 
=
 
d
i
f
f
 
 
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
a
s
e
(
a
r
r
:
 
n
u
m
b
e
r
[
]
)
:
 
C
a
s
e
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
 
C
a
s
e
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


 
 
c
o
n
s
t
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
;
 
/
/
 
a
r
r
a
y
 
l
e
n
g
t
h
 
=
 
n
,
 
s
o
 
c
o
m
p
l
e
t
e
 
r
a
n
g
e
 
i
s
 
0
.
.
n
 
(
n
+
1
 
v
a
l
u
e
s
)
,
 
o
n
e
 
m
i
s
s
i
n
g




 
 
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
 
a
r
r
:
 
`
[
$
{
a
r
r
.
j
o
i
n
(
"
,
 
"
)
}
]
`
,
 
n
 
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
p
u
t
:
 
[
$
{
a
r
r
.
j
o
i
n
(
"
,
 
"
)
}
]
.
 
W
e
 
n
e
e
d
 
t
o
 
f
i
n
d
 
w
h
i
c
h
 
n
u
m
b
e
r
 
f
r
o
m
 
0
 
t
o
 
$
{
n
}
 
i
s
 
m
i
s
s
i
n
g
.
`
,


 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
}
)
;




 
 
/
/
 
E
d
g
e
 
c
a
s
e
:
 
e
m
p
t
y


 
 
i
f
 
(
a
r
r
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
 
n
:
 
0
 
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
T
h
e
 
a
r
r
a
y
 
i
s
 
e
m
p
t
y
.
 
T
h
e
 
r
a
n
g
e
 
i
s
 
0
.
.
0
,
 
s
o
 
t
h
e
 
o
n
l
y
 
p
o
s
s
i
b
l
e
 
m
i
s
s
i
n
g
 
n
u
m
b
e
r
 
i
s
 
0
.
"
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
 
 
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
 
4
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
e
x
p
e
c
t
e
d
:
 
0
,
 
a
c
t
u
a
l
:
 
0
,
 
m
i
s
s
i
n
g
:
 
0
 
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
e
x
p
e
c
t
e
d
 
=
 
0
*
(
0
+
1
)
/
2
 
=
 
0
.
 
a
c
t
u
a
l
 
s
u
m
 
=
 
0
.
 
m
i
s
s
i
n
g
 
=
 
0
 
-
 
0
 
=
 
0
.
"
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
 
 
 
 
r
e
s
u
l
t
:
 
0
,


 
 
 
 
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
/
 
S
t
e
p
 
1
:
 
c
o
m
p
u
t
e
 
e
x
p
e
c
t
e
d
 
s
u
m


 
 
c
o
n
s
t
 
e
x
p
e
c
t
e
d
 
=
 
(
n
 
*
 
(
n
 
+
 
1
)
)
 
/
 
2
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
 
1
,


 
 
 
 
v
a
r
s
:
 
{
 
n
,
 
e
x
p
e
c
t
e
d
 
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
S
t
e
p
 
1
:
 
e
x
p
e
c
t
e
d
 
s
u
m
 
=
 
n
*
(
n
+
1
)
/
2
 
=
 
$
{
n
}
*
(
$
{
n
 
+
 
1
}
)
/
2
 
=
 
$
{
e
x
p
e
c
t
e
d
}
.
 
T
h
i
s
 
i
s
 
t
h
e
 
s
u
m
 
o
f
 
0
 
t
h
r
o
u
g
h
 
$
{
n
}
.
`
,


 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
}
)
;




 
 
/
/
 
S
t
e
p
 
2
:
 
c
o
m
p
u
t
e
 
a
c
t
u
a
l
 
s
u
m


 
 
l
e
t
 
a
c
t
u
a
l
 
=
 
0
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
 
n
,
 
e
x
p
e
c
t
e
d
,
 
a
c
t
u
a
l
,
 
i
:
 
0
 
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
S
t
e
p
 
2
:
 
s
t
a
r
t
 
s
u
m
m
i
n
g
 
t
h
e
 
a
c
t
u
a
l
 
a
r
r
a
y
.
"
,


 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
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
 
i
 
=
 
0
;
 
i
 
<
 
a
r
r
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
a
c
t
u
a
l
 
+
=
 
a
r
r
[
i
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
 
2
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
,
 
e
x
p
e
c
t
e
d
,
 
a
c
t
u
a
l
,
 
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
A
d
d
 
a
r
r
[
$
{
i
}
]
 
=
 
$
{
a
r
r
[
i
]
}
.
 
R
u
n
n
i
n
g
 
s
u
m
 
=
 
$
{
a
c
t
u
a
l
}
.
`
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
i
]
,


 
 
 
 
}
)
;


 
 
}




 
 
/
/
 
S
t
e
p
 
3
:
 
s
u
b
t
r
a
c
t


 
 
c
o
n
s
t
 
m
i
s
s
i
n
g
 
=
 
e
x
p
e
c
t
e
d
 
-
 
a
c
t
u
a
l
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
 
e
x
p
e
c
t
e
d
,
 
a
c
t
u
a
l
,
 
m
i
s
s
i
n
g
 
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
S
t
e
p
 
3
:
 
m
i
s
s
i
n
g
 
=
 
e
x
p
e
c
t
e
d
 
-
 
a
c
t
u
a
l
 
=
 
$
{
e
x
p
e
c
t
e
d
}
 
-
 
$
{
a
c
t
u
a
l
}
 
=
 
$
{
m
i
s
s
i
n
g
}
.
`
,


 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
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
 
4
,


 
 
 
 
v
a
r
s
:
 
{
 
m
i
s
s
i
n
g
 
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
A
n
s
w
e
r
:
 
t
h
e
 
m
i
s
s
i
n
g
 
n
u
m
b
e
r
 
i
s
 
$
{
m
i
s
s
i
n
g
}
.
`
,


 
 
 
 
h
i
g
h
l
i
g
h
t
:
 
[
]
,


 
 
 
 
r
e
s
u
l
t
:
 
m
i
s
s
i
n
g
,


 
 
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
a
s
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
 
C
a
s
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


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
a
r
r
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




c
o
n
s
t
 
C
A
S
E
_
P
R
E
S
E
T
S
:
 
C
a
s
e
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
n
o
r
m
a
l
"
,
 
l
a
b
e
l
:
 
"
N
o
r
m
a
l
 
c
a
s
e
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
M
i
s
s
i
n
g
 
2
 
i
n
 
t
h
e
 
m
i
d
d
l
e
"
,
 
a
r
r
:
 
[
0
,
 
1
,
 
3
,
 
4
]
 
}
,


 
 
{
 
i
d
:
 
"
e
m
p
t
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
E
m
p
t
y
 
a
r
r
a
y
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
E
d
g
e
 
c
a
s
e
:
 
n
o
 
e
l
e
m
e
n
t
s
"
,
 
a
r
r
:
 
[
]
 
}
,


 
 
{
 
i
d
:
 
"
s
i
n
g
l
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
S
i
n
g
l
e
 
e
l
e
m
e
n
t
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
E
d
g
e
 
c
a
s
e
:
 
j
u
s
t
 
[
1
]
"
,
 
a
r
r
:
 
[
1
]
 
}
,


 
 
{
 
i
d
:
 
"
l
a
s
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
M
i
s
s
i
n
g
 
l
a
s
t
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
E
d
g
e
 
c
a
s
e
:
 
l
a
s
t
 
n
u
m
b
e
r
 
m
i
s
s
i
n
g
"
,
 
a
r
r
:
 
[
0
,
 
1
,
 
2
,
 
3
]
 
}
,


]
;




c
o
n
s
t
 
M
I
S
S
I
N
G
_
N
U
M
_
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
f
i
n
d
M
i
s
s
i
n
g
(
a
r
r
)
:
"
,


 
 
"
 
 
n
 
=
 
a
r
r
.
l
e
n
g
t
h
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
a
r
r
:
 
a
c
t
u
a
l
 
+
=
 
i
"
,


 
 
"
 
 
m
i
s
s
i
n
g
 
=
 
n
*
(
n
+
1
)
/
2
 
-
 
a
c
t
u
a
l
"
,


 
 
"
 
 
r
e
t
u
r
n
 
m
i
s
s
i
n
g
"
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
c
a
s
e
I
d
,
 
s
e
t
C
a
s
e
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
n
o
r
m
a
l
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
 
C
A
S
E
_
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
c
)
 
=
>
 
c
.
i
d
 
=
=
=
 
c
a
s
e
I
d
)
 
?
?
 
C
A
S
E
_
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
 
b
u
i
l
d
C
a
s
e
(
p
r
e
s
e
t
.
a
r
r
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
 
9
0
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
F
i
n
d
 
M
i
s
s
i
n
g
 
N
u
m
b
e
r
,
 
4
 
e
d
g
e
 
c
a
s
e
s
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
 
t
e
s
t
 
c
a
s
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
C
A
S
E
_
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
c
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
c
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
c
a
s
e
I
d
 
=
=
=
 
c
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
C
a
s
e
I
d
(
c
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
c
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
s
e
t
.
d
e
s
c
r
i
p
t
i
o
n
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
M
I
S
S
I
N
G
_
N
U
M
_
P
S
E
U
D
O
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
a
c
t
u
a
l
"
,
 
"
m
i
s
s
i
n
g
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
 
t
r
a
c
e
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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




 
 
 
 
 
 
 
 
{
/
*
 
A
r
r
a
y
 
v
i
s
u
a
l
i
z
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
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
 
a
r
r
a
y


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
p
r
e
s
e
t
.
a
r
r
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
 
?
 
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
[
 
e
m
p
t
y
 
]
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
r
e
s
e
t
.
a
r
r
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
=
 
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
?
.
i
n
c
l
u
d
e
s
(
i
d
x
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
 
g
a
p
-
0
.
5
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
w
-
1
0
 
h
-
1
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
?
 
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
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
?
 
"
#
e
c
f
c
c
b
"
 
:
 
"
#
f
a
f
a
f
9
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
H
i
g
h
l
i
g
h
t
e
d
 
?
 
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
D
a
r
k
 
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
a
b
u
l
a
r
-
n
u
m
s
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
t
e
x
t
M
u
t
e
d
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
i
d
x
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
 
b
a
d
g
e
 
*
/
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
r
e
s
u
l
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
i
s
s
i
n
g
 
n
u
m
b
e
r


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
2
x
l
 
f
o
n
t
-
b
o
l
d
 
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
a
b
u
l
a
r
-
n
u
m
s
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
f
r
a
m
e
.
r
e
s
u
l
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
i
n
p
u
t
s
,
 
c
o
n
s
t
r
a
i
n
t
s
 
&
 
e
d
g
e
 
c
a
s
e
s
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
H
a
l
f
 
t
h
e
 
b
a
t
t
l
e
 
i
s
 
r
e
a
d
i
n
g
 
t
h
e
 
p
r
o
b
l
e
m
 
c
a
r
e
f
u
l
l
y
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


 
 
 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
w
r
i
t
i
n
g
 
a
 
s
i
n
g
l
e
 
l
i
n
e
 
o
f
 
c
o
d
e
 
i
n
 
a
n
 
i
n
t
e
r
v
i
e
w
,
 
y
o
u
 
n
e
e
d
 
t
o
 
f
u
l
l
y
 
u
n
d
e
r
s
t
a
n
d


 
 
 
 
 
 
 
 
 
 
w
h
a
t
 
t
h
e
 
p
r
o
b
l
e
m
 
i
s
 
a
s
k
i
n
g
.
 
M
o
s
t
 
w
r
o
n
g
 
s
o
l
u
t
i
o
n
s
 
c
o
m
e
 
f
r
o
m
 
s
k
i
p
p
i
n
g
 
t
h
i
s
 
s
t
e
p
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
E
v
e
r
y
 
p
r
o
b
l
e
m
 
h
a
s
 
t
h
r
e
e
 
t
h
i
n
g
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
1
.
 
I
n
p
u
t
s
,
 
w
h
a
t
 
y
o
u
 
a
r
e
 
g
i
v
e
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
d
a
t
a
 
y
o
u
r
 
f
u
n
c
t
i
o
n
 
r
e
c
e
i
v
e
s
.
 
C
o
u
l
d
 
b
e
 
a
n
 
a
r
r
a
y
 
o
f
 
n
u
m
b
e
r
s
,
 
a
 
s
t
r
i
n
g
,
 
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
r
a
p
h
,
 
o
r
 
a
 
s
i
n
g
l
e
 
i
n
t
e
g
e
r
.
 
A
l
w
a
y
s
 
n
a
m
e
 
t
h
e
 
t
y
p
e
 
a
n
d
 
s
h
a
p
e
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
.
 
O
u
t
p
u
t
s
,
 
w
h
a
t
 
y
o
u
 
m
u
s
t
 
r
e
t
u
r
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
d
a
t
a
 
y
o
u
r
 
f
u
n
c
t
i
o
n
 
m
u
s
t
 
p
r
o
d
u
c
e
.
 
A
 
n
u
m
b
e
r
,
 
a
 
l
i
s
t
,
 
a
 
y
e
s
/
n
o
 
a
n
s
w
e
r
.
 
B
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
c
t
,
 
"
r
e
t
u
r
n
 
t
h
e
 
i
n
d
e
x
,
 
n
o
t
 
t
h
e
 
v
a
l
u
e
"
 
i
s
 
a
 
c
o
m
m
o
n
 
g
o
t
c
h
a
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
3
.
 
C
o
n
s
t
r
a
i
n
t
s
 
(
c
o
n
-
S
T
R
A
Y
N
T
S
)
,
 
t
h
e
 
r
u
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
b
o
u
n
d
s
 
o
n
 
t
h
e
 
i
n
p
u
t
:
 
h
o
w
 
l
a
r
g
e
 
c
a
n
 
n
 
b
e
,
 
a
r
e
 
v
a
l
u
e
s
 
a
l
w
a
y
s
 
p
o
s
i
t
i
v
e
,
 
c
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
 
i
n
p
u
t
 
b
e
 
e
m
p
t
y
?
 
C
o
n
s
t
r
a
i
n
t
s
 
a
r
e
 
a
 
h
i
d
d
e
n
 
h
i
n
t
 
a
b
o
u
t
 
w
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
t
o
 
p
i
c
k
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
E
d
g
e
 
c
a
s
e
s
:
 
t
h
e
 
i
n
p
u
t
s
 
t
h
a
t
 
b
r
e
a
k
 
n
a
i
v
e
 
c
o
d
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
3
"
>


 
 
 
 
 
 
 
 
 
 
A
n
 
e
d
g
e
 
c
a
s
e
 
(
a
l
s
o
 
c
a
l
l
e
d
 
a
 
c
o
r
n
e
r
 
c
a
s
e
)
 
i
s
 
a
 
s
p
e
c
i
a
l
 
i
n
p
u
t
 
t
h
a
t
 
s
i
t
s
 
a
t
 
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
 
o
f
 
n
o
r
m
a
l
 
b
e
h
a
v
i
o
r
.
 
N
a
i
v
e
 
c
o
d
e
 
o
f
t
e
n
 
b
r
e
a
k
s
 
o
n
 
t
h
e
m
.
 
A
l
w
a
y
s
 
t
e
s
t
 
t
h
e
s
e
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
u
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
2
 
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
l
i
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
E
m
p
t
y
 
i
n
p
u
t
<
/
s
t
r
o
n
g
>
,
 
a
n
 
e
m
p
t
y


 
 
 
 
 
 
 
 
 
 
 
 
a
r
r
a
y
,
 
a
n
 
e
m
p
t
y
 
s
t
r
i
n
g
,
 
n
 
=
 
0
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
S
i
n
g
l
e
 
e
l
e
m
e
n
t
<
/
s
t
r
o
n
g
>
,
 
o
n
e
 
i
t
e
m


 
 
 
 
 
 
 
 
 
 
 
 
i
n
 
t
h
e
 
a
r
r
a
y
,
 
n
 
=
 
1
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
A
l
l
 
d
u
p
l
i
c
a
t
e
s
<
/
s
t
r
o
n
g
>
,
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
 
 
e
l
e
m
e
n
t
 
i
s
 
t
h
e
 
s
a
m
e
 
v
a
l
u
e
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
N
e
g
a
t
i
v
e
 
n
u
m
b
e
r
s
<
/
s
t
r
o
n
g
>
,
 
d
o
e
s


 
 
 
 
 
 
 
 
 
 
 
 
y
o
u
r
 
c
o
d
e
 
b
r
e
a
k
 
i
f
 
v
a
l
u
e
s
 
a
r
e
 
n
e
g
a
t
i
v
e
?


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
M
a
x
-
s
i
z
e
 
i
n
p
u
t
<
/
s
t
r
o
n
g
>
,
 
w
h
a
t


 
 
 
 
 
 
 
 
 
 
 
 
h
a
p
p
e
n
s
 
a
t
 
t
h
e
 
a
b
s
o
l
u
t
e
 
l
a
r
g
e
s
t
 
a
l
l
o
w
e
d
 
n
?


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
A
l
r
e
a
d
y
 
s
o
r
t
e
d
 
/
 
r
e
v
e
r
s
e
d
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
 
m
a
n
y
 
s
o
r
t
i
n
g
-
b
a
s
e
d
 
a
l
g
o
r
i
t
h
m
s
 
h
a
v
e
 
b
a
d
 
w
o
r
s
t
 
c
a
s
e
s
 
h
e
r
e
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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
A
l
w
a
y
s
 
a
s
k
 
t
h
e
 
i
n
t
e
r
v
i
e
w
e
r
 
a
b
o
u
t
 
c
o
n
s
t
r
a
i
n
t
s
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


 
 
 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
y
o
u
 
c
o
d
e
 
a
n
y
t
h
i
n
g
,
 
a
s
k
 
t
h
e
s
e
 
q
u
e
s
t
i
o
n
s
 
o
u
t
 
l
o
u
d
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
u
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
 
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
l
i
>
W
h
a
t
 
i
s
 
t
h
e
 
l
a
r
g
e
s
t
 
n
 
I
 
s
h
o
u
l
d
 
h
a
n
d
l
e
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
r
e
 
t
h
e
 
v
a
l
u
e
s
 
a
l
w
a
y
s
 
i
n
t
e
g
e
r
s
?
 
C
a
n
 
t
h
e
y
 
b
e
 
n
e
g
a
t
i
v
e
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
a
n
 
t
h
e
 
i
n
p
u
t
 
b
e
 
e
m
p
t
y
 
o
r
 
n
u
l
l
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
h
o
u
l
d
 
I
 
r
e
t
u
r
n
 
t
h
e
 
v
a
l
u
e
 
o
r
 
t
h
e
 
i
n
d
e
x
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
I
s
 
t
h
e
r
e
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
b
e
 
a
 
s
o
l
u
t
i
o
n
?
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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


 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
v
i
e
w
e
r
s
 
r
e
s
p
e
c
t
 
t
h
i
s
.
 
I
t
 
s
h
o
w
s
 
y
o
u
 
t
h
i
n
k
 
b
e
f
o
r
e
 
y
o
u
 
c
o
d
e
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
F
i
n
d
 
t
h
e
 
m
a
x
i
m
u
m
 
v
a
l
u
e
 
i
n
 
a
n
 
a
r
r
a
y
.
 
W
h
a
t
 
a
r
e
 
t
h
e
 
e
d
g
e
 
c
a
s
e
s
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
u
n
c
t
i
o
n
 
f
i
n
d
M
a
x
(
a
r
r
)
:
\
n
 
 
m
a
x
 
=
 
a
r
r
[
0
]
\
n
 
 
f
o
r
 
x
 
i
n
 
a
r
r
:
\
n
 
 
 
 
i
f
 
x
 
>
 
m
a
x
:
 
m
a
x
 
=
 
x
\
n
 
 
r
e
t
u
r
n
 
m
a
x
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
O
n
l
y
:
 
w
h
e
n
 
a
l
l
 
v
a
l
u
e
s
 
a
r
e
 
t
h
e
 
s
a
m
e
"
,


 
 
 
 
 
 
 
 
"
E
m
p
t
y
 
a
r
r
a
y
 
(
a
r
r
[
0
]
 
c
r
a
s
h
e
s
)
 
a
n
d
 
s
i
n
g
l
e
 
e
l
e
m
e
n
t
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
v
a
l
u
e
s
 
a
r
e
 
n
e
g
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
"
N
o
 
e
d
g
e
 
c
a
s
e
s
,
 
t
h
i
s
 
a
l
w
a
y
s
 
w
o
r
k
s
"
,


 
 
 
 
 
 
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
I
f
 
a
r
r
 
i
s
 
e
m
p
t
y
,
 
a
r
r
[
0
]
 
c
r
a
s
h
e
s
.
 
I
f
 
a
r
r
 
h
a
s
 
o
n
e
 
e
l
e
m
e
n
t
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
 
o
n
c
e
 
a
n
d
 
r
e
t
u
r
n
s
 
i
t
 
(
c
o
r
r
e
c
t
,
 
b
u
t
 
w
o
r
t
h
 
v
e
r
i
f
y
i
n
g
)
.
 
N
e
g
a
t
i
v
e
 
v
a
l
u
e
s
 
a
r
e
 
h
a
n
d
l
e
d
 
f
i
n
e
 
b
y
 
t
h
e
 
>
 
c
o
m
p
a
r
i
s
o
n
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
 
p
r
o
b
l
e
m
 
s
a
y
s
 
1
 
≤
 
n
 
≤
 
1
0
0
,
0
0
0
.
 
W
h
i
c
h
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
c
a
n
 
y
o
u
 
a
f
f
o
r
d
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
#
 
C
o
n
s
t
r
a
i
n
t
s
:
 
1
 
≤
 
n
 
≤
 
1
0
0
,
0
0
0
\
n
#
 
T
i
m
e
 
l
i
m
i
t
:
 
1
 
s
e
c
o
n
d
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
O
(
n
²
)
,
 
t
h
a
t
'
s
 
a
b
o
u
t
 
1
0
¹
⁰
 
o
p
e
r
a
t
i
o
n
s
"
,
 
"
O
(
n
 
l
o
g
 
n
)
,
 
a
b
o
u
t
 
1
.
7
 
×
 
1
0
⁶
 
o
p
e
r
a
t
i
o
n
s
"
,
 
"
O
(
n
!
)
,
 
w
a
y
 
t
o
o
 
s
l
o
w
"
,
 
"
O
(
2
ⁿ
)
,
 
w
a
y
 
t
o
o
 
s
l
o
w
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
n
 
=
 
1
0
⁵
.
 
O
(
n
²
)
 
=
 
1
0
¹
⁰
,
 
f
a
r
 
t
o
o
 
s
l
o
w
 
(
n
e
e
d
s
 
~
1
0
0
 
s
e
c
o
n
d
s
)
.
 
O
(
n
 
l
o
g
 
n
)
 
≈
 
1
.
7
 
×
 
1
0
⁶
,
 
w
e
l
l
 
w
i
t
h
i
n
 
1
 
s
e
c
o
n
d
.
 
C
o
n
s
t
r
a
i
n
t
s
 
r
e
v
e
a
l
 
t
h
e
 
t
a
r
g
e
t
 
c
o
m
p
l
e
x
i
t
y
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
P
r
o
b
l
e
m
:
 
'
R
e
t
u
r
n
 
t
h
e
 
m
e
d
i
a
n
 
o
f
 
a
n
 
a
r
r
a
y
.
'
 
W
h
a
t
 
e
d
g
e
 
c
a
s
e
 
i
s
 
M
O
S
T
 
i
m
p
o
r
t
a
n
t
 
t
o
 
h
a
n
d
l
e
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
#
 
M
e
d
i
a
n
:
 
m
i
d
d
l
e
 
v
a
l
u
e
 
o
f
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
.
\
n
#
 
F
o
r
 
e
v
e
n
 
l
e
n
g
t
h
:
 
a
v
e
r
a
g
e
 
o
f
 
t
w
o
 
m
i
d
d
l
e
 
v
a
l
u
e
s
.
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
A
l
l
 
p
o
s
i
t
i
v
e
 
n
u
m
b
e
r
s
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
 
w
i
t
h
 
m
o
r
e
 
t
h
a
n
 
3
 
e
l
e
m
e
n
t
s
"
,


 
 
 
 
 
 
 
 
"
E
m
p
t
y
 
a
r
r
a
y
 
(
n
o
 
m
e
d
i
a
n
 
e
x
i
s
t
s
)
 
a
n
d
 
e
v
e
n
 
v
s
 
o
d
d
 
l
e
n
g
t
h
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
 
t
h
a
t
 
i
s
 
a
l
r
e
a
d
y
 
s
o
r
t
e
d
"
,


 
 
 
 
 
 
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
A
n
 
e
m
p
t
y
 
a
r
r
a
y
 
h
a
s
 
n
o
 
m
e
d
i
a
n
,
 
y
o
u
 
m
u
s
t
 
d
e
c
i
d
e
 
w
h
e
t
h
e
r
 
t
o
 
r
e
t
u
r
n
 
n
u
l
l
,
 
t
h
r
o
w
,
 
o
r
 
h
a
n
d
l
e
 
i
t
.
 
E
v
e
n
-
l
e
n
g
t
h
 
a
r
r
a
y
s
 
r
e
q
u
i
r
e
 
a
v
e
r
a
g
i
n
g
 
t
w
o
 
e
l
e
m
e
n
t
s
,
 
n
o
t
 
j
u
s
t
 
p
i
c
k
i
n
g
 
o
n
e
.
 
T
h
e
s
e
 
a
r
e
 
t
h
e
 
t
w
o
 
m
a
i
n
 
e
d
g
e
 
c
a
s
e
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
W
h
i
c
h
 
q
u
e
s
t
i
o
n
 
i
s
 
M
O
S
T
 
u
s
e
f
u
l
 
t
o
 
a
s
k
 
t
h
e
 
i
n
t
e
r
v
i
e
w
e
r
 
a
b
o
u
t
 
t
h
i
s
 
p
r
o
b
l
e
m
:
 
'
F
i
n
d
 
t
w
o
 
n
u
m
b
e
r
s
 
i
n
 
a
n
 
a
r
r
a
y
 
t
h
a
t
 
s
u
m
 
t
o
 
t
a
r
g
e
t
'
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
#
 
P
r
o
b
l
e
m
:
 
g
i
v
e
n
 
a
r
r
 
a
n
d
 
t
a
r
g
e
t
,
 
r
e
t
u
r
n
 
i
n
d
i
c
e
s
\
n
#
 
o
f
 
t
w
o
 
n
u
m
b
e
r
s
 
t
h
a
t
 
a
d
d
 
u
p
 
t
o
 
t
a
r
g
e
t
.
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
'
S
h
o
u
l
d
 
I
 
u
s
e
 
P
y
t
h
o
n
 
o
r
 
J
a
v
a
S
c
r
i
p
t
?
'
"
,


 
 
 
 
 
 
 
 
"
'
C
a
n
 
t
h
e
 
a
r
r
a
y
 
b
e
 
e
m
p
t
y
?
 
C
a
n
 
t
h
e
 
s
a
m
e
 
e
l
e
m
e
n
t
 
b
e
 
u
s
e
d
 
t
w
i
c
e
?
 
A
r
e
 
t
h
e
r
e
 
a
l
w
a
y
s
 
e
x
a
c
t
l
y
 
t
w
o
 
s
o
l
u
t
i
o
n
s
?
'
"
,


 
 
 
 
 
 
 
 
"
'
I
s
 
t
h
i
s
 
a
 
t
r
i
c
k
 
q
u
e
s
t
i
o
n
?
'
"
,


 
 
 
 
 
 
 
 
"
'
C
a
n
 
I
 
u
s
e
 
a
 
l
i
b
r
a
r
y
 
f
u
n
c
t
i
o
n
?
'
"
,


 
 
 
 
 
 
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
A
s
k
i
n
g
 
a
b
o
u
t
 
e
m
p
t
y
 
i
n
p
u
t
,
 
r
e
u
s
e
 
o
f
 
e
l
e
m
e
n
t
s
,
 
a
n
d
 
w
h
e
t
h
e
r
 
a
 
s
o
l
u
t
i
o
n
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
c
h
a
n
g
e
s
 
t
h
e
 
a
l
g
o
r
i
t
h
m
.
 
T
h
e
s
e
 
a
r
e
 
t
h
e
 
c
l
a
s
s
i
c
 
c
o
n
s
t
r
a
i
n
t
s
 
f
o
r
 
t
h
e
 
t
w
o
-
s
u
m
 
p
r
o
b
l
e
m
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


 
 
 
 
 
 
 
 
R
e
a
d
 
e
a
c
h
 
p
r
o
b
l
e
m
 
s
t
a
t
e
m
e
n
t
 
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
 
T
h
e
 
e
d
g
e
 
c
a
s
e
s
 
a
n
d
 
c
o
n
s
t
r
a
i
n
t
s
 
a
r
e
 
i
n
 
t
h
e


 
 
 
 
 
 
 
 
d
e
t
a
i
l
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
C
o
n
s
t
r
a
i
n
t
s
 
t
e
l
l
 
y
o
u
 
w
h
i
c
h
 
c
o
m
p
l
e
x
i
t
y
 
i
s
 
a
c
c
e
p
t
a
b
l
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
3
"
>


 
 
 
 
 
 
 
 
 
 
M
o
d
e
r
n
 
c
o
m
p
u
t
e
r
s
 
e
x
e
c
u
t
e
 
r
o
u
g
h
l
y
 
1
0
⁸
 
s
i
m
p
l
e
 
o
p
e
r
a
t
i
o
n
s
 
p
e
r
 
s
e
c
o
n
d
.
 
U
s
e
 
t
h
e


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
r
a
i
n
t
 
o
n
 
n
 
t
o
 
c
h
o
o
s
e
 
y
o
u
r
 
t
a
r
g
e
t
 
c
o
m
p
l
e
x
i
t
y
 
b
e
f
o
r
e
 
w
r
i
t
i
n
g
 
a
n
y
 
c
o
d
e
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
n
 
b
o
u
n
d
"
,
 
"
M
a
x
 
a
c
c
e
p
t
a
b
l
e
 
c
o
m
p
l
e
x
i
t
y
"
,
 
"
W
h
y
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
 
n
:
 
"
n
 
≤
 
2
0
"
,
 
c
:
 
"
O
(
2
ⁿ
)
"
,
 
w
h
y
:
 
"
2
²
⁰
 
≈
 
1
0
⁶
,
 
f
a
s
t
 
e
n
o
u
g
h
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
5
0
0
"
,
 
c
:
 
"
O
(
n
³
)
"
,
 
w
h
y
:
 
"
5
0
0
³
 
=
 
1
.
2
5
×
1
0
⁸
,
 
b
o
r
d
e
r
l
i
n
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
5
,
0
0
0
"
,
 
c
:
 
"
O
(
n
²
)
"
,
 
w
h
y
:
 
"
2
5
×
1
0
⁶
,
 
f
i
n
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
1
0
⁵
"
,
 
c
:
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
w
h
y
:
 
"
1
.
7
×
1
0
⁶
,
 
f
a
s
t
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
1
0
⁶
"
,
 
c
:
 
"
O
(
n
)
"
,
 
w
h
y
:
 
"
1
0
⁶
,
 
e
a
s
y
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
n
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
n
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
c
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
w
h
y
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


 
 
 
 
 
 
 
 
 
 
R
e
a
d
i
n
g
 
t
h
e
 
c
o
n
s
t
r
a
i
n
t
s
 
f
i
r
s
t
 
s
a
v
e
s
 
y
o
u
 
f
r
o
m
 
w
r
i
t
i
n
g
 
t
h
e
 
w
r
o
n
g
 
a
l
g
o
r
i
t
h
m
 
e
n
t
i
r
e
l
y
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
T
h
e
 
t
h
r
e
e
 
q
u
e
s
t
i
o
n
s
 
t
o
 
a
l
w
a
y
s
 
a
s
k
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
o
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
l
i
s
t
-
d
e
c
i
m
a
l
 
p
l
-
5
 
s
p
a
c
e
-
y
-
2
 
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
l
i
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
W
h
a
t
 
i
s
 
t
h
e
 
l
a
r
g
e
s
t
 
n
?
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


 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
d
e
t
e
r
m
i
n
e
s
 
y
o
u
r
 
t
a
r
g
e
t
 
c
o
m
p
l
e
x
i
t
y
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
A
r
e
 
v
a
l
u
e
s
 
n
e
g
a
t
i
v
e
 
/
 
z
e
r
o
?
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


 
 
 
 
 
 
 
 
 
 
 
 
M
a
n
y
 
a
l
g
o
r
i
t
h
m
s
 
a
s
s
u
m
e
 
n
o
n
-
n
e
g
a
t
i
v
e
 
i
n
p
u
t
 
a
n
d
 
s
i
l
e
n
t
l
y
 
b
r
e
a
k
 
o
t
h
e
r
w
i
s
e
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
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
C
a
n
 
t
h
e
 
a
r
r
a
y
 
b
e
 
e
m
p
t
y
?
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


 
 
 
 
 
 
 
 
 
 
 
 
C
r
a
s
h
e
s
 
o
n
 
e
m
p
t
y
 
i
n
p
u
t
 
a
r
e
 
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
 
i
n
t
e
r
v
i
e
w
 
b
u
g
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
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
R
e
a
d
i
n
g
 
c
o
n
s
t
r
a
i
n
t
s
 
s
a
v
e
s
 
t
i
m
e
,
 
n
o
t
 
j
u
s
t
 
b
u
g
s
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
m
a
g
i
n
e
 
s
p
e
n
d
i
n
g
 
1
5
 
m
i
n
u
t
e
s
 
w
r
i
t
i
n
g
 
a
 
p
e
r
f
e
c
t
 
O
(
n
 
l
o
g
 
n
)
 
s
o
l
u
t
i
o
n
 
a
n
d
 
t
h
e
n


 
 
 
 
 
 
 
 
 
 
d
i
s
c
o
v
e
r
i
n
g
 
t
h
e
 
p
r
o
b
l
e
m
 
o
n
l
y
 
n
e
e
d
s
 
a
 
b
r
u
t
e
 
f
o
r
c
e
 
O
(
n
²
)
 
b
e
c
a
u
s
e
 
n
 
≤
 
2
0
0
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
"
>


 
 
 
 
 
 
 
 
 
 
O
r
 
w
o
r
s
e
:
 
w
r
i
t
i
n
g
 
O
(
n
²
)
 
a
n
d
 
t
h
e
n
 
f
i
n
d
i
n
g
 
o
u
t
 
n
 
≤
 
1
0
⁶
.
 
R
e
a
d
i
n
g
 
c
o
n
s
t
r
a
i
n
t
s
 
f
i
r
s
t


 
 
 
 
 
 
 
 
 
 
m
e
a
n
s
 
y
o
u
 
a
l
w
a
y
s
 
a
i
m
 
a
t
 
t
h
e
 
r
i
g
h
t
 
t
a
r
g
e
t
 
f
r
o
m
 
t
h
e
 
s
t
a
r
t
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


 
 
 
 
 
 
 
 
C
a
n
d
i
d
a
t
e
s
 
w
h
o
 
s
k
i
p
 
r
e
a
d
i
n
g
 
c
o
n
s
t
r
a
i
n
t
s
 
w
r
i
t
e
 
t
h
e
 
w
r
o
n
g
 
a
l
g
o
r
i
t
h
m
.
 
D
o
n
'
t
 
b
e
 
t
h
a
t


 
 
 
 
 
 
 
 
c
a
n
d
i
d
a
t
e
.
 
S
p
e
n
d
 
2
 
m
i
n
u
t
e
s
 
r
e
a
d
i
n
g
 
t
h
e
 
p
r
o
b
l
e
m
 
c
a
r
e
f
u
l
l
y
 
a
n
d
 
y
o
u
 
w
i
l
l
 
s
a
v
e
 
1
5
 
m
i
n
u
t
e
s


 
 
 
 
 
 
 
 
o
f
 
w
a
s
t
e
d
 
c
o
d
e
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
I
n
p
u
t
s
C
o
n
s
t
r
a
i
n
t
s
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
W
h
i
c
h
 
o
f
 
t
h
e
s
e
 
i
s
 
a
n
 
e
d
g
e
 
c
a
s
e
 
f
o
r
 
a
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
f
i
n
d
s
 
t
h
e
 
m
i
n
i
m
u
m
 
v
a
l
u
e
 
i
n
 
a
n
 
a
r
r
a
y
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
A
n
 
a
r
r
a
y
 
o
f
 
1
0
0
 
r
a
n
d
o
m
 
p
o
s
i
t
i
v
e
 
i
n
t
e
g
e
r
s
"
,


 
 
 
 
 
 
 
 
"
A
n
 
a
r
r
a
y
 
c
o
n
t
a
i
n
i
n
g
 
o
n
l
y
 
n
e
g
a
t
i
v
e
 
n
u
m
b
e
r
s
"
,


 
 
 
 
 
 
 
 
"
A
n
 
e
m
p
t
y
 
a
r
r
a
y
"
,


 
 
 
 
 
 
 
 
"
A
n
 
a
r
r
a
y
 
s
o
r
t
e
d
 
i
n
 
d
e
s
c
e
n
d
i
n
g
 
o
r
d
e
r
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
A
n
 
e
m
p
t
y
 
a
r
r
a
y
 
i
s
 
t
h
e
 
c
l
a
s
s
i
c
 
e
d
g
e
 
c
a
s
e
,
 
a
c
c
e
s
s
i
n
g
 
i
n
d
e
x
 
0
 
c
r
a
s
h
e
s
.
 
N
e
g
a
t
i
v
e
 
n
u
m
b
e
r
s
 
a
n
d
 
s
o
r
t
e
d
 
a
r
r
a
y
s
 
a
r
e
 
h
a
n
d
l
e
d
 
c
o
r
r
e
c
t
l
y
 
b
y
 
a
 
s
i
m
p
l
e
 
c
o
m
p
a
r
i
s
o
n
 
l
o
o
p
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
 
p
r
o
b
l
e
m
 
s
t
a
t
e
s
 
n
 
≤
 
1
0
⁶
.
 
W
h
i
c
h
 
c
o
m
p
l
e
x
i
t
y
 
i
s
 
t
o
o
 
s
l
o
w
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
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
"
,
 
"
O
(
l
o
g
 
n
)
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
O
(
n
²
)
 
=
 
1
0
¹
²
 
o
p
e
r
a
t
i
o
n
s
 
f
o
r
 
n
 
=
 
1
0
⁶
,
 
t
h
a
t
 
w
o
u
l
d
 
t
a
k
e
 
t
h
o
u
s
a
n
d
s
 
o
f
 
s
e
c
o
n
d
s
.
 
O
(
n
)
 
a
n
d
 
O
(
n
 
l
o
g
 
n
)
 
a
r
e
 
b
o
t
h
 
f
i
n
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
W
h
a
t
 
s
h
o
u
l
d
 
y
o
u
 
d
o
 
B
E
F
O
R
E
 
w
r
i
t
i
n
g
 
a
n
y
 
c
o
d
e
 
i
n
 
a
n
 
i
n
t
e
r
v
i
e
w
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
S
t
a
r
t
 
c
o
d
i
n
g
 
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
 
t
o
 
s
h
o
w
 
s
p
e
e
d
"
,


 
 
 
 
 
 
 
 
"
A
s
k
 
a
b
o
u
t
 
c
o
n
s
t
r
a
i
n
t
s
,
 
e
d
g
e
 
c
a
s
e
s
,
 
a
n
d
 
w
h
a
t
 
e
x
a
c
t
l
y
 
t
o
 
r
e
t
u
r
n
"
,


 
 
 
 
 
 
 
 
"
W
r
i
t
e
 
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
p
l
e
x
 
s
o
l
u
t
i
o
n
 
y
o
u
 
k
n
o
w
"
,


 
 
 
 
 
 
 
 
"
A
s
s
u
m
e
 
a
l
l
 
i
n
p
u
t
s
 
a
r
e
 
v
a
l
i
d
 
a
n
d
 
n
 
i
s
 
s
m
a
l
l
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
s
k
i
n
g
 
a
b
o
u
t
 
c
o
n
s
t
r
a
i
n
t
s
 
a
n
d
 
e
d
g
e
 
c
a
s
e
s
 
s
h
o
w
s
 
s
t
r
u
c
t
u
r
e
d
 
t
h
i
n
k
i
n
g
.
 
I
t
 
a
l
s
o
 
p
r
e
v
e
n
t
s
 
y
o
u
 
f
r
o
m
 
b
u
i
l
d
i
n
g
 
t
h
e
 
w
r
o
n
g
 
s
o
l
u
t
i
o
n
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
a
l
m
o
s
t
 
a
l
w
a
y
s
 
r
e
w
a
r
d
 
t
h
i
s
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
 
p
r
o
b
l
e
m
 
s
a
y
s
 
'
f
i
n
d
 
a
l
l
 
p
a
i
r
s
 
t
h
a
t
 
s
u
m
 
t
o
 
t
a
r
g
e
t
'
.
 
W
h
a
t
 
e
d
g
e
 
c
a
s
e
 
c
o
u
l
d
 
c
r
a
s
h
 
n
a
i
v
e
 
c
o
d
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
W
h
e
n
 
t
h
e
 
a
r
r
a
y
 
h
a
s
 
e
x
a
c
t
l
y
 
2
 
e
l
e
m
e
n
t
s
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
t
h
e
 
a
r
r
a
y
 
i
s
 
e
m
p
t
y
,
 
i
t
e
r
a
t
i
n
g
 
o
v
e
r
 
a
n
 
e
m
p
t
y
 
a
r
r
a
y
 
r
e
t
u
r
n
s
 
n
o
 
p
a
i
r
s
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
a
l
l
 
v
a
l
u
e
s
 
a
r
e
 
p
o
s
i
t
i
v
e
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
t
a
r
g
e
t
 
i
s
 
a
 
l
a
r
g
e
 
n
u
m
b
e
r
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
n
 
e
m
p
t
y
 
a
r
r
a
y
 
h
a
s
 
n
o
 
p
a
i
r
s
,
 
s
o
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
a
n
 
e
m
p
t
y
 
r
e
s
u
l
t
.
 
N
a
i
v
e
 
c
o
d
e
 
t
h
a
t
 
d
o
e
s
n
'
t
 
g
u
a
r
d
 
f
o
r
 
l
e
n
g
t
h
 
c
a
n
 
c
r
a
s
h
 
o
r
 
b
e
h
a
v
e
 
i
n
c
o
r
r
e
c
t
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
W
h
a
t
 
d
o
e
s
 
a
 
c
o
n
s
t
r
a
i
n
t
 
l
i
k
e
 
'
v
a
l
u
e
s
 
a
r
e
 
i
n
 
r
a
n
g
e
 
-
1
0
⁹
 
t
o
 
1
0
⁹
'
 
t
e
l
l
 
y
o
u
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
Y
o
u
 
c
a
n
 
u
s
e
 
a
 
s
m
a
l
l
 
f
i
x
e
d
-
s
i
z
e
 
a
r
r
a
y
 
f
o
r
 
c
o
u
n
t
i
n
g
"
,


 
 
 
 
 
 
 
 
"
V
a
l
u
e
s
 
c
a
n
 
b
e
 
v
e
r
y
 
l
a
r
g
e
 
o
r
 
n
e
g
a
t
i
v
e
,
 
s
o
 
a
v
o
i
d
 
a
r
r
a
y
 
i
n
d
e
x
i
n
g
 
b
y
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
a
l
g
o
r
i
t
h
m
 
m
u
s
t
 
b
e
 
O
(
1
)
 
s
p
a
c
e
"
,


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
 
u
s
e
f
u
l
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
I
f
 
y
o
u
 
t
r
i
e
d
 
t
o
 
u
s
e
 
a
n
 
a
r
r
a
y
 
i
n
d
e
x
e
d
 
b
y
 
v
a
l
u
e
,
 
y
o
u
'
d
 
n
e
e
d
 
a
 
2
×
1
0
⁹
-
e
l
e
m
e
n
t
 
a
r
r
a
y
,
 
w
a
y
 
t
o
o
 
m
u
c
h
 
m
e
m
o
r
y
.
 
T
h
i
s
 
c
o
n
s
t
r
a
i
n
t
 
m
e
a
n
s
 
y
o
u
 
s
h
o
u
l
d
 
u
s
e
 
a
 
h
a
s
h
 
m
a
p
 
o
r
 
s
o
r
t
-
b
a
s
e
d
 
a
p
p
r
o
a
c
h
 
i
n
s
t
e
a
d
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
I
n
p
u
t
s
,
 
C
o
n
s
t
r
a
i
n
t
s
 
&
 
E
d
g
e
 
C
a
s
e
s
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
6
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
C
a
n
d
i
d
a
t
e
s
 
w
h
o
 
s
k
i
p
 
r
e
a
d
i
n
g
 
c
o
n
s
t
r
a
i
n
t
s
 
w
r
i
t
e
 
t
h
e
 
w
r
o
n
g
 
a
l
g
o
r
i
t
h
m
.
 
D
o
n
'
t
 
b
e
 
t
h
a
t
 
c
a
n
d
i
d
a
t
e
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
T
i
m
e
 
C
o
m
p
l
e
x
i
t
y
 
&
 
B
i
g
-
O
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


