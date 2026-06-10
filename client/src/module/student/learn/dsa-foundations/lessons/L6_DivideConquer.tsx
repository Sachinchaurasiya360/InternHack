
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
 
C
o
d
e
2
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


 
 
I
n
p
u
t
E
d
i
t
o
r
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


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
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
 
 
C
l
o
s
e
s
t
 
P
a
i
r
 
o
f
 
P
o
i
n
t
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
 
P
o
i
n
t
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
i
d
:
 
n
u
m
b
e
r
;
 
}




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
P
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


 
 
d
i
v
i
d
e
r
?
:
 
n
u
m
b
e
r
;


 
 
l
e
f
t
R
a
n
g
e
?
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
;


 
 
r
i
g
h
t
R
a
n
g
e
?
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
;


 
 
b
e
s
t
P
a
i
r
?
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
;


 
 
b
e
s
t
D
i
s
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


 
 
s
t
r
i
p
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
?
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
 
P
S
E
U
D
O
_
C
P
 
=
 
[


 
 
"
c
l
o
s
e
s
t
P
a
i
r
(
P
)
:
 
 
/
/
 
P
 
s
o
r
t
e
d
 
b
y
 
x
"
,


 
 
"
 
 
i
f
 
|
P
|
 
<
=
 
3
:
 
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
"
,


 
 
"
 
 
m
i
d
 
←
 
P
.
l
e
n
g
t
h
 
/
 
2
"
,


 
 
"
 
 
d
L
 
←
 
c
l
o
s
e
s
t
P
a
i
r
(
P
[
0
.
.
m
i
d
]
)
"
,


 
 
"
 
 
d
R
 
←
 
c
l
o
s
e
s
t
P
a
i
r
(
P
[
m
i
d
.
.
]
)
"
,


 
 
"
 
 
d
 
 
←
 
m
i
n
(
d
L
,
 
d
R
)
"
,


 
 
"
 
 
s
c
a
n
 
s
t
r
i
p
 
|
x
 
-
 
m
i
d
.
x
|
 
<
 
d
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
n
(
d
,
 
s
t
r
i
p
M
i
n
)
"
,


]
;




f
u
n
c
t
i
o
n
 
p
t
D
i
s
t
(
a
:
 
P
o
i
n
t
,
 
b
:
 
P
o
i
n
t
)
 
{


 
 
r
e
t
u
r
n
 
M
a
t
h
.
h
y
p
o
t
(
a
.
x
 
-
 
b
.
x
,
 
a
.
y
 
-
 
b
.
y
)
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
C
l
o
s
e
s
t
P
a
i
r
(
p
o
i
n
t
s
:
 
P
o
i
n
t
[
]
)
:
 
C
P
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
 
s
o
r
t
e
d
 
=
 
[
.
.
.
p
o
i
n
t
s
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
x
 
-
 
b
.
x
 
|
|
 
a
.
y
 
-
 
b
.
y
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
s
:
 
C
P
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


 
 
l
e
t
 
b
e
s
t
:
 
{
 
p
a
i
r
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
;
 
d
:
 
n
u
m
b
e
r
 
}
 
=
 
{
 
p
a
i
r
:
 
n
u
l
l
,
 
d
:
 
I
n
f
i
n
i
t
y
 
}
;




 
 
f
u
n
c
t
i
o
n
 
b
r
u
t
e
F
o
r
c
e
(
p
t
s
:
 
P
o
i
n
t
[
]
,
 
x
L
o
:
 
n
u
m
b
e
r
,
 
x
H
i
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
f
r
a
m
e
s
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
 
s
i
z
e
:
 
p
t
s
.
l
e
n
g
t
h
,
 
b
e
s
t
:
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
b
e
s
t
.
d
)
 
?
 
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
 
:
 
"
∞
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
B
a
s
e
 
c
a
s
e
:
 
b
r
u
t
e
-
f
o
r
c
e
 
$
{
p
t
s
.
l
e
n
g
t
h
}
 
p
o
i
n
t
s
.
`
,


 
 
 
 
 
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
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
 
p
t
s
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


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
i
 
+
 
1
;
 
j
 
<
 
p
t
s
.
l
e
n
g
t
h
;
 
j
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
p
t
D
i
s
t
(
p
t
s
[
i
]
,
 
p
t
s
[
j
]
)
;


 
 
 
 
 
 
 
 
i
f
 
(
d
 
<
 
b
e
s
t
.
d
)
 
{


 
 
 
 
 
 
 
 
 
 
b
e
s
t
 
=
 
{
 
p
a
i
r
:
 
[
p
t
s
[
i
]
.
i
d
,
 
p
t
s
[
j
]
.
i
d
]
,
 
d
 
}
;


 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
p
a
i
r
:
 
`
(
$
{
p
t
s
[
i
]
.
i
d
}
,
$
{
p
t
s
[
j
]
.
i
d
}
)
`
,
 
d
:
 
d
.
t
o
F
i
x
e
d
(
2
)
 
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
N
e
w
 
b
e
s
t
:
 
p
o
i
n
t
s
 
$
{
p
t
s
[
i
]
.
i
d
}
-
$
{
p
t
s
[
j
]
.
i
d
}
,
 
d
 
=
 
$
{
d
.
t
o
F
i
x
e
d
(
2
)
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
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
u
r
s
e
(
p
t
s
:
 
P
o
i
n
t
[
]
,
 
x
L
o
:
 
n
u
m
b
e
r
,
 
x
H
i
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
f
r
a
m
e
s
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
 
s
i
z
e
:
 
p
t
s
.
l
e
n
g
t
h
,
 
b
e
s
t
:
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
b
e
s
t
.
d
)
 
?
 
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
 
:
 
"
∞
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
c
l
o
s
e
s
t
P
a
i
r
 
o
n
 
$
{
p
t
s
.
l
e
n
g
t
h
}
 
p
o
i
n
t
s
 
(
x
 
i
n
 
[
$
{
x
L
o
.
t
o
F
i
x
e
d
(
1
)
}
,
 
$
{
x
H
i
.
t
o
F
i
x
e
d
(
1
)
}
]
)
.
`
,


 
 
 
 
 
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
p
t
s
.
l
e
n
g
t
h
 
<
=
 
3
)
 
{
 
b
r
u
t
e
F
o
r
c
e
(
p
t
s
,
 
x
L
o
,
 
x
H
i
)
;
 
r
e
t
u
r
n
;
 
}




 
 
 
 
c
o
n
s
t
 
m
i
d
I
d
x
 
=
 
M
a
t
h
.
f
l
o
o
r
(
p
t
s
.
l
e
n
g
t
h
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
m
i
d
X
 
=
 
p
t
s
[
m
i
d
I
d
x
]
.
x
;


 
 
 
 
f
r
a
m
e
s
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
 
m
i
d
:
 
m
i
d
X
.
t
o
F
i
x
e
d
(
1
)
,
 
s
i
z
e
:
 
p
t
s
.
l
e
n
g
t
h
 
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
i
v
i
d
e
:
 
v
e
r
t
i
c
a
l
 
l
i
n
e
 
x
 
=
 
$
{
m
i
d
X
.
t
o
F
i
x
e
d
(
1
)
}
.
`
,


 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
m
i
d
X
]
,
 
r
i
g
h
t
R
a
n
g
e
:
 
[
m
i
d
X
,
 
x
H
i
]
,


 
 
 
 
 
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
}
)
;


 
 
 
 
f
r
a
m
e
s
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
 
m
i
d
:
 
m
i
d
X
.
t
o
F
i
x
e
d
(
1
)
 
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
R
e
c
u
r
s
e
 
o
n
 
L
E
F
T
 
h
a
l
f
 
(
$
{
m
i
d
I
d
x
}
 
p
o
i
n
t
s
)
.
`
,


 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
m
i
d
X
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
}
)
;


 
 
 
 
r
e
c
u
r
s
e
(
p
t
s
.
s
l
i
c
e
(
0
,
 
m
i
d
I
d
x
)
,
 
x
L
o
,
 
m
i
d
X
)
;




 
 
 
 
f
r
a
m
e
s
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
d
:
 
m
i
d
X
.
t
o
F
i
x
e
d
(
1
)
 
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
R
e
c
u
r
s
e
 
o
n
 
R
I
G
H
T
 
h
a
l
f
 
(
$
{
p
t
s
.
l
e
n
g
t
h
 
-
 
m
i
d
I
d
x
}
 
p
o
i
n
t
s
)
.
`
,


 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
r
i
g
h
t
R
a
n
g
e
:
 
[
m
i
d
X
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
}
)
;


 
 
 
 
r
e
c
u
r
s
e
(
p
t
s
.
s
l
i
c
e
(
m
i
d
I
d
x
)
,
 
m
i
d
X
,
 
x
H
i
)
;




 
 
 
 
f
r
a
m
e
s
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
 
5
,
 
v
a
r
s
:
 
{
 
d
:
 
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
 
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
o
m
b
i
n
e
 
s
t
e
p
.
 
N
o
w
 
c
h
e
c
k
 
t
h
e
 
s
t
r
i
p
 
|
x
 
-
 
m
i
d
|
 
<
 
$
{
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
}
.
`
,


 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
}
)
;




 
 
 
 
c
o
n
s
t
 
s
t
r
i
p
 
=
 
p
t
s
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
M
a
t
h
.
a
b
s
(
p
.
x
 
-
 
m
i
d
X
)
 
<
 
b
e
s
t
.
d
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
y
 
-
 
b
.
y
)
;


 
 
 
 
f
r
a
m
e
s
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
 
6
,
 
v
a
r
s
:
 
{
 
s
t
r
i
p
:
 
s
t
r
i
p
.
l
e
n
g
t
h
,
 
d
:
 
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
 
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
r
i
p
 
h
a
s
 
$
{
s
t
r
i
p
.
l
e
n
g
t
h
}
 
p
o
i
n
t
s
.
 
S
c
a
n
 
n
e
i
g
h
b
o
r
s
 
w
i
t
h
i
n
 
$
{
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
}
 
y
-
d
i
s
t
a
n
c
e
.
`
,


 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
l
e
f
t
R
a
n
g
e
:
 
[
x
L
o
,
 
x
H
i
]
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
 
 
s
t
r
i
p
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
:
 
s
t
r
i
p
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
 
p
.
i
d
)
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
 
s
t
r
i
p
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


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
i
 
+
 
1
;
 
j
 
<
 
s
t
r
i
p
.
l
e
n
g
t
h
 
&
&
 
s
t
r
i
p
[
j
]
.
y
 
-
 
s
t
r
i
p
[
i
]
.
y
 
<
 
b
e
s
t
.
d
;
 
j
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
p
t
D
i
s
t
(
s
t
r
i
p
[
i
]
,
 
s
t
r
i
p
[
j
]
)
;


 
 
 
 
 
 
 
 
i
f
 
(
d
 
<
 
b
e
s
t
.
d
)
 
{


 
 
 
 
 
 
 
 
 
 
b
e
s
t
 
=
 
{
 
p
a
i
r
:
 
[
s
t
r
i
p
[
i
]
.
i
d
,
 
s
t
r
i
p
[
j
]
.
i
d
]
,
 
d
 
}
;


 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
s
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
 
7
,
 
v
a
r
s
:
 
{
 
p
a
i
r
:
 
`
(
$
{
s
t
r
i
p
[
i
]
.
i
d
}
,
$
{
s
t
r
i
p
[
j
]
.
i
d
}
)
`
,
 
d
:
 
d
.
t
o
F
i
x
e
d
(
2
)
 
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
r
i
p
 
w
i
n
s
:
 
$
{
s
t
r
i
p
[
i
]
.
i
d
}
-
$
{
s
t
r
i
p
[
j
]
.
i
d
}
 
a
t
 
d
 
=
 
$
{
d
.
t
o
F
i
x
e
d
(
2
)
}
!
`
,


 
 
 
 
 
 
 
 
 
 
 
 
d
i
v
i
d
e
r
:
 
m
i
d
X
,
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
i
p
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
:
 
s
t
r
i
p
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
 
p
.
i
d
)
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
r
e
c
u
r
s
e
(
s
o
r
t
e
d
,
 
M
a
t
h
.
m
i
n
(
.
.
.
s
o
r
t
e
d
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
 
p
.
x
)
)
,
 
M
a
t
h
.
m
a
x
(
.
.
.
s
o
r
t
e
d
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
 
p
.
x
)
)
)
;


 
 
f
r
a
m
e
s
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
 
7
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
,
 
p
a
i
r
:
 
b
e
s
t
.
p
a
i
r
 
?
 
`
(
$
{
b
e
s
t
.
p
a
i
r
[
0
]
}
,
 
$
{
b
e
s
t
.
p
a
i
r
[
1
]
}
)
`
 
:
 
"
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
D
o
n
e
.
 
C
l
o
s
e
s
t
 
p
a
i
r
 
d
i
s
t
a
n
c
e
 
=
 
$
{
b
e
s
t
.
d
.
t
o
F
i
x
e
d
(
2
)
}
.
`
,


 
 
 
 
b
e
s
t
P
a
i
r
:
 
b
e
s
t
.
p
a
i
r
,
 
b
e
s
t
D
i
s
t
:
 
b
e
s
t
.
d
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
r
a
m
e
s
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
 
C
l
o
s
e
s
t
P
a
i
r
P
l
o
t
(
{
 
p
o
i
n
t
s
,
 
f
r
a
m
e
 
}
:
 
{
 
p
o
i
n
t
s
:
 
P
o
i
n
t
[
]
;
 
f
r
a
m
e
:
 
C
P
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
5
4
0
,
 
H
 
=
 
3
0
0
,
 
P
A
D
 
=
 
2
4
;


 
 
c
o
n
s
t
 
x
M
i
n
 
=
 
M
a
t
h
.
m
i
n
(
.
.
.
p
o
i
n
t
s
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
 
p
.
x
)
)
;


 
 
c
o
n
s
t
 
x
M
a
x
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
p
o
i
n
t
s
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
 
p
.
x
)
)
;


 
 
c
o
n
s
t
 
y
M
i
n
 
=
 
M
a
t
h
.
m
i
n
(
.
.
.
p
o
i
n
t
s
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
 
p
.
y
)
)
;


 
 
c
o
n
s
t
 
y
M
a
x
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
p
o
i
n
t
s
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
 
p
.
y
)
)
;


 
 
c
o
n
s
t
 
s
x
 
=
 
(
x
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
 
P
A
D
 
+
 
(
(
x
 
-
 
x
M
i
n
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
x
M
a
x
 
-
 
x
M
i
n
)
)
 
*
 
(
W
 
-
 
2
 
*
 
P
A
D
)
;


 
 
c
o
n
s
t
 
s
y
 
=
 
(
y
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
 
H
 
-
 
P
A
D
 
-
 
(
(
y
 
-
 
y
M
i
n
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
y
M
a
x
 
-
 
y
M
i
n
)
)
 
*
 
(
H
 
-
 
2
 
*
 
P
A
D
)
;




 
 
c
o
n
s
t
 
b
e
s
t
I
d
s
 
=
 
f
r
a
m
e
.
b
e
s
t
P
a
i
r
;


 
 
c
o
n
s
t
 
b
e
s
t
P
t
s
 
=
 
b
e
s
t
I
d
s
 
?
 
[
p
o
i
n
t
s
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
 
b
e
s
t
I
d
s
[
0
]
)
!
,
 
p
o
i
n
t
s
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
 
b
e
s
t
I
d
s
[
1
]
)
!
]
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
s
t
r
i
p
S
e
t
 
=
 
n
e
w
 
S
e
t
(
f
r
a
m
e
.
s
t
r
i
p
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
 
?
?
 
[
]
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
s
v
g
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
}
`
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
w
-
f
u
l
l
 
h
-
a
u
t
o
 
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
"
 
s
t
y
l
e
=
{
{
 
m
a
x
H
e
i
g
h
t
:
 
3
2
0
 
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
l
e
f
t
R
a
n
g
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
s
x
(
f
r
a
m
e
.
l
e
f
t
R
a
n
g
e
[
0
]
)
}
 
y
=
{
P
A
D
}


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
M
a
t
h
.
m
a
x
(
1
,
 
s
x
(
f
r
a
m
e
.
l
e
f
t
R
a
n
g
e
[
1
]
)
 
-
 
s
x
(
f
r
a
m
e
.
l
e
f
t
R
a
n
g
e
[
0
]
)
)
}
 
h
e
i
g
h
t
=
{
H
 
-
 
2
 
*
 
P
A
D
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
0
8
)
"
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
f
r
a
m
e
.
r
i
g
h
t
R
a
n
g
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
s
x
(
f
r
a
m
e
.
r
i
g
h
t
R
a
n
g
e
[
0
]
)
}
 
y
=
{
P
A
D
}


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
M
a
t
h
.
m
a
x
(
1
,
 
s
x
(
f
r
a
m
e
.
r
i
g
h
t
R
a
n
g
e
[
1
]
)
 
-
 
s
x
(
f
r
a
m
e
.
r
i
g
h
t
R
a
n
g
e
[
0
]
)
)
}
 
h
e
i
g
h
t
=
{
H
 
-
 
2
 
*
 
P
A
D
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
0
8
)
"
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
f
r
a
m
e
.
d
i
v
i
d
e
r
 
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
l
i
n
e
 
x
1
=
{
s
x
(
f
r
a
m
e
.
d
i
v
i
d
e
r
)
}
 
y
1
=
{
P
A
D
}
 
x
2
=
{
s
x
(
f
r
a
m
e
.
d
i
v
i
d
e
r
)
}
 
y
2
=
{
H
 
-
 
P
A
D
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
5
 
4
"
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
f
r
a
m
e
.
d
i
v
i
d
e
r
 
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
 
f
r
a
m
e
.
b
e
s
t
D
i
s
t
 
&
&
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
f
r
a
m
e
.
b
e
s
t
D
i
s
t
)
 
&
&
 
(


 
 
 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
 
 
x
=
{
s
x
(
f
r
a
m
e
.
d
i
v
i
d
e
r
 
-
 
f
r
a
m
e
.
b
e
s
t
D
i
s
t
)
}
 
y
=
{
P
A
D
}


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
M
a
t
h
.
m
a
x
(
1
,
 
s
x
(
f
r
a
m
e
.
d
i
v
i
d
e
r
 
+
 
f
r
a
m
e
.
b
e
s
t
D
i
s
t
)
 
-
 
s
x
(
f
r
a
m
e
.
d
i
v
i
d
e
r
 
-
 
f
r
a
m
e
.
b
e
s
t
D
i
s
t
)
)
}
 
h
e
i
g
h
t
=
{
H
 
-
 
2
 
*
 
P
A
D
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
1
2
)
"
 
s
t
r
o
k
e
=
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
4
)
"
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
b
e
s
t
P
t
s
 
&
&
 
(


 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
s
x
(
b
e
s
t
P
t
s
[
0
]
.
x
)
}
 
y
1
=
{
s
y
(
b
e
s
t
P
t
s
[
0
]
.
y
)
}
 
x
2
=
{
s
x
(
b
e
s
t
P
t
s
[
1
]
.
x
)
}
 
y
2
=
{
s
y
(
b
e
s
t
P
t
s
[
1
]
.
y
)
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
e
f
4
4
4
4
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
3
}
 
s
t
y
l
e
=
{
{
 
f
i
l
t
e
r
:
 
"
d
r
o
p
-
s
h
a
d
o
w
(
0
 
0
 
6
p
x
 
r
g
b
a
(
2
3
9
,
6
8
,
6
8
,
0
.
6
)
)
"
 
}
}
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
p
o
i
n
t
s
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
B
e
s
t
 
=
 
b
e
s
t
P
t
s
 
&
&
 
(
p
.
i
d
 
=
=
=
 
b
e
s
t
P
t
s
[
0
]
.
i
d
 
|
|
 
p
.
i
d
 
=
=
=
 
b
e
s
t
P
t
s
[
1
]
.
i
d
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
S
t
r
i
p
 
=
 
s
t
r
i
p
S
e
t
.
h
a
s
(
p
.
i
d
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
g
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
s
x
(
p
.
x
)
}
 
c
y
=
{
s
y
(
p
.
y
)
}
 
r
=
{
i
s
B
e
s
t
 
?
 
7
 
:
 
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
i
s
B
e
s
t
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
i
n
S
t
r
i
p
 
?
 
"
#
8
b
5
c
f
6
"
 
:
 
"
#
0
f
1
7
2
a
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
f
f
f
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
s
t
y
l
e
=
{
{
 
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
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
s
x
(
p
.
x
)
 
+
 
8
}
 
y
=
{
s
y
(
p
.
y
)
 
-
 
8
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
{
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
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
>
{
p
.
i
d
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
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
 
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
c
a
l
c
u
l
a
t
o
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
a
s
t
e
r
R
e
s
u
l
t
 
{


 
 
c
a
s
e
N
u
m
b
e
r
:
 
1
 
|
 
2
 
|
 
3
 
|
 
n
u
l
l
;


 
 
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
:
 
s
t
r
i
n
g
;


 
 
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
 
s
t
r
i
n
g
;


 
 
l
o
g
B
a
:
 
n
u
m
b
e
r
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
 
m
a
s
t
e
r
T
h
e
o
r
e
m
(
a
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
,
 
f
E
x
p
o
n
e
n
t
:
 
n
u
m
b
e
r
,
 
i
n
c
l
u
d
e
s
L
o
g
 
=
 
f
a
l
s
e
)
:
 
M
a
s
t
e
r
R
e
s
u
l
t
 
{


 
 
c
o
n
s
t
 
l
o
g
B
a
 
=
 
M
a
t
h
.
l
o
g
(
a
)
 
/
 
M
a
t
h
.
l
o
g
(
b
)
;


 
 
c
o
n
s
t
 
e
p
s
 
=
 
1
e
-
6
;


 
 
i
f
 
(
f
E
x
p
o
n
e
n
t
 
<
 
l
o
g
B
a
 
-
 
e
p
s
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
a
s
e
N
u
m
b
e
r
:
 
1
,
 
l
o
g
B
a
,


 
 
 
 
 
 
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
:
 
`
Θ
(
n
^
$
{
l
o
g
B
a
.
t
o
F
i
x
e
d
(
3
)
}
)
`
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
 
`
f
(
n
)
 
=
 
Θ
(
n
^
$
{
f
E
x
p
o
n
e
n
t
}
)
 
i
s
 
p
o
l
y
n
o
m
i
a
l
l
y
 
s
m
a
l
l
e
r
 
t
h
a
n
 
n
^
l
o
g
b
(
a
)
 
=
 
n
^
$
{
l
o
g
B
a
.
t
o
F
i
x
e
d
(
3
)
}
.
 
L
e
a
v
e
s
 
d
o
m
i
n
a
t
e
.
`
,


 
 
 
 
}
;


 
 
}


 
 
i
f
 
(
M
a
t
h
.
a
b
s
(
f
E
x
p
o
n
e
n
t
 
-
 
l
o
g
B
a
)
 
<
 
e
p
s
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
c
a
s
e
N
u
m
b
e
r
:
 
2
,
 
l
o
g
B
a
,


 
 
 
 
 
 
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
:
 
`
Θ
(
n
^
$
{
l
o
g
B
a
.
t
o
F
i
x
e
d
(
3
)
}
 
·
 
l
o
g
$
{
i
n
c
l
u
d
e
s
L
o
g
 
?
 
"
^
(
k
+
1
)
"
 
:
 
"
"
}
 
n
)
`
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
 
`
f
(
n
)
 
a
n
d
 
n
^
l
o
g
b
(
a
)
 
g
r
o
w
 
a
t
 
t
h
e
 
s
a
m
e
 
r
a
t
e
.
 
E
v
e
r
y
 
l
e
v
e
l
 
c
o
s
t
s
 
t
h
e
 
s
a
m
e
.
`
,


 
 
 
 
}
;


 
 
}


 
 
r
e
t
u
r
n
 
{


 
 
 
 
c
a
s
e
N
u
m
b
e
r
:
 
3
,
 
l
o
g
B
a
,


 
 
 
 
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
:
 
`
Θ
(
n
^
$
{
f
E
x
p
o
n
e
n
t
}
$
{
i
n
c
l
u
d
e
s
L
o
g
 
?
 
"
 
l
o
g
 
n
"
 
:
 
"
"
}
)
`
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
 
`
f
(
n
)
 
=
 
Θ
(
n
^
$
{
f
E
x
p
o
n
e
n
t
}
)
 
g
r
o
w
s
 
f
a
s
t
e
r
 
t
h
a
n
 
n
^
l
o
g
b
(
a
)
 
=
 
n
^
$
{
l
o
g
B
a
.
t
o
F
i
x
e
d
(
3
)
}
.
 
R
o
o
t
 
d
o
m
i
n
a
t
e
s
 
(
r
e
g
u
l
a
r
i
t
y
 
h
o
l
d
s
 
f
o
r
 
c
o
m
m
o
n
 
c
a
s
e
s
)
.
`
,


 
 
}
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
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




c
o
n
s
t
 
D
E
F
A
U
L
T
_
P
O
I
N
T
S
 
=
 
"
2
,
3
 
5
,
9
 
7
,
2
 
1
0
,
4
 
1
2
,
8
 
1
5
,
5
 
1
8
,
9
 
2
0
,
1
"
;




f
u
n
c
t
i
o
n
 
p
a
r
s
e
P
o
i
n
t
s
(
s
:
 
s
t
r
i
n
g
)
:
 
P
o
i
n
t
[
]
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
s
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
;


 
 
c
o
n
s
t
 
p
t
s
:
 
P
o
i
n
t
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
 
=
 
0
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
)
)
;


 
 
 
 
i
f
 
(
m
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
 
2
 
&
&
 
!
m
.
s
o
m
e
(
N
u
m
b
e
r
.
i
s
N
a
N
)
)
 
p
t
s
.
p
u
s
h
(
{
 
x
:
 
m
[
0
]
,
 
y
:
 
m
[
1
]
,
 
i
d
:
 
i
d
+
+
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
p
t
s
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
m
o
d
e
,
 
s
e
t
M
o
d
e
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
"
c
l
o
s
e
s
t
"
 
|
 
"
m
a
s
t
e
r
"
>
(
"
c
l
o
s
e
s
t
"
)
;


 
 
c
o
n
s
t
 
[
p
o
i
n
t
S
t
r
,
 
s
e
t
P
o
i
n
t
S
t
r
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
D
E
F
A
U
L
T
_
P
O
I
N
T
S
)
;


 
 
c
o
n
s
t
 
p
o
i
n
t
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
a
r
s
e
P
o
i
n
t
s
(
p
o
i
n
t
S
t
r
)
,
 
[
p
o
i
n
t
S
t
r
]
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
o
i
n
t
s
.
l
e
n
g
t
h
 
>
=
 
2
 
?
 
b
u
i
l
d
C
l
o
s
e
s
t
P
a
i
r
(
p
o
i
n
t
s
)
 
:
 
[
]
,
 
[
p
o
i
n
t
s
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




 
 
/
/
 
M
a
s
t
e
r
 
t
h
e
o
r
e
m


 
 
c
o
n
s
t
 
[
a
S
t
r
,
 
s
e
t
A
S
t
r
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
2
"
)
;


 
 
c
o
n
s
t
 
[
b
S
t
r
,
 
s
e
t
B
S
t
r
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
2
"
)
;


 
 
c
o
n
s
t
 
[
f
S
t
r
,
 
s
e
t
F
S
t
r
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
"
)
;


 
 
c
o
n
s
t
 
m
a
s
t
e
r
R
e
s
u
l
t
 
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
 
{


 
 
 
 
c
o
n
s
t
 
a
 
=
 
N
u
m
b
e
r
(
a
S
t
r
)
 
|
|
 
1
;


 
 
 
 
c
o
n
s
t
 
b
 
=
 
N
u
m
b
e
r
(
b
S
t
r
)
 
|
|
 
2
;


 
 
 
 
c
o
n
s
t
 
t
x
t
 
=
 
f
S
t
r
.
t
r
i
m
(
)
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
l
e
t
 
e
x
p
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
i
n
c
l
u
d
e
s
L
o
g
 
=
 
/
l
o
g
/
.
t
e
s
t
(
t
x
t
)
;


 
 
 
 
i
f
 
(
/
^
n
\
^
(
\
d
+
(
\
.
\
d
+
)
?
)
/
.
t
e
s
t
(
t
x
t
)
)
 
e
x
p
 
=
 
p
a
r
s
e
F
l
o
a
t
(
t
x
t
.
m
a
t
c
h
(
/
\
^
(
\
d
+
(
\
.
\
d
+
)
?
)
/
)
!
[
1
]
)
;


 
 
 
 
e
l
s
e
 
i
f
 
(
t
x
t
 
=
=
=
 
"
n
"
 
|
|
 
/
^
n
(
l
o
g
)
?
/
.
t
e
s
t
(
t
x
t
)
)
 
e
x
p
 
=
 
1
;


 
 
 
 
e
l
s
e
 
i
f
 
(
t
x
t
 
=
=
=
 
"
1
"
 
|
|
 
/
^
l
o
g
/
.
t
e
s
t
(
t
x
t
)
)
 
e
x
p
 
=
 
0
;


 
 
 
 
e
l
s
e
 
i
f
 
(
/
^
n
\
^
2
/
.
t
e
s
t
(
t
x
t
)
)
 
e
x
p
 
=
 
2
;


 
 
 
 
r
e
t
u
r
n
 
{
 
r
e
s
:
 
m
a
s
t
e
r
T
h
e
o
r
e
m
(
a
,
 
b
,
 
e
x
p
,
 
i
n
c
l
u
d
e
s
L
o
g
)
,
 
a
,
 
b
,
 
e
x
p
,
 
i
n
c
l
u
d
e
s
L
o
g
 
}
;


 
 
}
,
 
[
a
S
t
r
,
 
b
S
t
r
,
 
f
S
t
r
]
)
;




 
 
/
/
 
─
─
 
F
I
X
:
 
b
o
t
h
 
h
o
o
k
s
 
m
o
v
e
d
 
a
b
o
v
e
 
t
h
e
 
e
a
r
l
y
 
r
e
t
u
r
n
 
─
─


 
 
c
o
n
s
t
 
d
u
m
m
y
F
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
 
[
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
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
c
a
l
c
u
l
a
t
o
r
"
 
}
]
,
 
[
]
)
;


 
 
c
o
n
s
t
 
d
u
m
m
y
 
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
d
u
m
m
y
F
r
a
m
e
s
)
;




 
 
c
o
n
s
t
 
m
o
d
e
T
o
g
g
l
e
 
=
 
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
{
(
[
"
c
l
o
s
e
s
t
"
,
 
"
m
a
s
t
e
r
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
m
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
m
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
M
o
d
e
(
m
)
}
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
m
}
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
x
s
"
>
{
m
 
=
=
=
 
"
c
l
o
s
e
s
t
"
 
?
 
"
C
l
o
s
e
s
t
 
P
a
i
r
"
 
:
 
"
M
a
s
t
e
r
 
T
h
e
o
r
e
m
"
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


 
 
)
;




 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
c
l
o
s
e
s
t
"
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
C
l
o
s
e
s
t
 
P
a
i
r
 
o
f
 
P
o
i
n
t
s
 
-
 
D
i
v
i
d
e
 
&
 
C
o
n
q
u
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


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
o
i
n
t
s
 
(
x
,
y
)
 
s
p
a
c
e
-
s
e
p
a
r
a
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
o
i
n
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
2
,
3
 
5
,
9
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
E
a
c
h
 
t
o
k
e
n
 
i
s
 
a
n
 
(
x
,
 
y
)
 
p
a
i
r
.
 
S
p
a
c
e
-
s
e
p
a
r
a
t
e
 
p
o
i
n
t
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
8
 
s
c
a
t
t
e
r
e
d
"
,
 
v
a
l
u
e
:
 
D
E
F
A
U
L
T
_
P
O
I
N
T
S
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
g
r
i
d
"
,
 
v
a
l
u
e
:
 
"
1
,
1
 
1
,
4
 
4
,
1
 
4
,
4
 
2
,
2
 
3
,
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
t
i
g
h
t
 
c
l
u
s
t
e
r
"
,
 
v
a
l
u
e
:
 
"
5
,
5
 
5
,
6
 
6
,
5
 
6
,
6
 
1
,
1
 
9
,
9
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
s
e
t
P
o
i
n
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
P
S
E
U
D
O
_
C
P
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
 
?
?
 
0
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
d
"
,
 
"
p
a
i
r
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
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
 
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
5
0
0
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
w
-
2
.
5
 
h
-
2
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
s
m
 
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
"
 
/
>
b
e
s
t
 
p
a
i
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
-
v
i
o
l
e
t
-
5
0
0
"
 
/
>
s
t
r
i
p
 
c
a
n
d
i
d
a
t
e
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
-
b
l
u
e
-
3
0
0
"
 
/
>
l
e
f
t
 
h
a
l
f
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
-
e
m
e
r
a
l
d
-
3
0
0
"
 
/
>
r
i
g
h
t
 
h
a
l
f
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


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
<
C
l
o
s
e
s
t
P
a
i
r
P
l
o
t
 
p
o
i
n
t
s
=
{
p
o
i
n
t
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
 
:
 
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
s
t
o
n
e
-
4
0
0
 
p
-
5
 
t
e
x
t
-
x
s
"
>
N
e
e
d
 
a
t
 
l
e
a
s
t
 
2
 
p
o
i
n
t
s
.
<
/
d
i
v
>
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
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
.
m
e
s
s
a
g
e
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
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
-
 
T
(
n
)
 
=
 
a
 
·
 
T
(
n
/
b
)
 
+
 
f
(
n
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
d
u
m
m
y
}


 
 
 
 
 
 
i
n
p
u
t
=
{
m
o
d
e
T
o
g
g
l
e
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
a
 
(
s
u
b
p
r
o
b
l
e
m
s
)
"
,
 
v
a
l
u
e
:
 
a
S
t
r
,
 
o
n
C
h
a
n
g
e
:
 
s
e
t
A
S
t
r
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
b
 
(
s
h
r
i
n
k
 
f
a
c
t
o
r
)
"
,
 
v
a
l
u
e
:
 
b
S
t
r
,
 
o
n
C
h
a
n
g
e
:
 
s
e
t
B
S
t
r
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
f
(
n
)
 
(
c
o
m
b
i
n
e
 
c
o
s
t
)
"
,
 
v
a
l
u
e
:
 
f
S
t
r
,
 
o
n
C
h
a
n
g
e
:
 
s
e
t
F
S
t
r
,
 
p
l
a
c
e
h
o
l
d
e
r
:
 
"
e
.
g
.
 
n
,
 
n
^
2
,
 
l
o
g
 
n
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
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
o
n
C
h
a
n
g
e
,
 
p
l
a
c
e
h
o
l
d
e
r
 
}
)
 
=
>
 
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
l
a
b
e
l
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
5
0
0
 
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
 
m
b
-
1
"
>
{
l
a
b
e
l
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
o
n
C
h
a
n
g
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
{
p
l
a
c
e
h
o
l
d
e
r
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
w
-
f
u
l
l
 
p
x
-
2
.
5
 
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
1
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
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
C
a
r
d
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
R
e
c
u
r
r
e
n
c
e
:
 
<
c
o
d
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
1
0
0
"
>
T
(
n
)
 
=
 
{
m
a
s
t
e
r
R
e
s
u
l
t
.
a
}
 
·
 
T
(
n
/
{
m
a
s
t
e
r
R
e
s
u
l
t
.
b
}
)
 
+
 
{
f
S
t
r
}
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
b
a
s
e
 
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
l
i
m
e
-
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
a
s
t
e
r
R
e
s
u
l
t
.
r
e
s
.
c
a
s
e
N
u
m
b
e
r
 
?
 
`
C
a
s
e
 
$
{
m
a
s
t
e
r
R
e
s
u
l
t
.
r
e
s
.
c
a
s
e
N
u
m
b
e
r
}
`
 
:
 
"
U
n
k
n
o
w
n
"
}
 
→
 
{
m
a
s
t
e
r
R
e
s
u
l
t
.
r
e
s
.
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
}


 
 
 
 
 
 
 
 
 
 
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
"
>
{
m
a
s
t
e
r
R
e
s
u
l
t
.
r
e
s
.
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
}
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
n
^
l
o
g
_
b
(
a
)
 
=
 
n
^
{
m
a
s
t
e
r
R
e
s
u
l
t
.
r
e
s
.
l
o
g
B
a
.
t
o
F
i
x
e
d
(
3
)
}
.
 
C
o
m
p
a
r
i
n
g
 
t
o
 
f
(
n
)
 
=
 
Θ
(
n
^
{
m
a
s
t
e
r
R
e
s
u
l
t
.
e
x
p
}
{
m
a
s
t
e
r
R
e
s
u
l
t
.
i
n
c
l
u
d
e
s
L
o
g
 
?
 
"
 
·
 
l
o
g
 
n
"
 
:
 
"
"
}
)
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
R
e
f
e
r
e
n
c
e
:
<
/
s
t
r
o
n
g
>
 
M
e
r
g
e
 
S
o
r
t
 
→
 
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
n
 
→
 
a
=
2
,
 
b
=
2
,
 
f
=
n
 
→
 
C
a
s
e
 
2
 
→
 
Θ
(
n
 
l
o
g
 
n
)
.


 
 
 
 
 
 
 
 
 
 
 
 
B
i
n
a
r
y
 
S
e
a
r
c
h
 
→
 
T
(
n
)
 
=
 
T
(
n
/
2
)
 
+
 
1
 
→
 
C
a
s
e
 
2
 
→
 
Θ
(
l
o
g
 
n
)
.
 
S
t
r
a
s
s
e
n
 
→
 
T
(
n
)
 
=
 
7
T
(
n
/
2
)
 
+
 
n
²
 
→
 
C
a
s
e
 
1
 
→
 
Θ
(
n
^
l
o
g
₂
7
)
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
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
c
o
n
s
t
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
r
e
e
 
s
t
e
p
s
"
,
 
b
o
d
y
:
 
"
D
I
V
I
D
E
 
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
n
t
o
 
s
m
a
l
l
e
r
 
s
u
b
-
p
r
o
b
l
e
m
s
 
o
f
 
t
h
e
 
s
a
m
e
 
k
i
n
d
.
 
C
O
N
Q
U
E
R
 
e
a
c
h
 
b
y
 
r
e
c
u
r
s
i
o
n
.
 
C
O
M
B
I
N
E
 
t
h
e
 
s
u
b
-
a
n
s
w
e
r
s
 
i
n
t
o
 
t
h
e
 
f
i
n
a
l
 
a
n
s
w
e
r
.
 
T
h
e
 
c
o
m
b
i
n
e
 
s
t
e
p
 
i
s
 
w
h
e
r
e
 
t
h
e
 
m
a
g
i
c
 
u
s
u
a
l
l
y
 
l
i
v
e
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
y
 
i
t
 
b
e
a
t
s
 
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
"
,
 
b
o
d
y
:
 
"
E
a
c
h
 
s
p
l
i
t
 
s
h
r
i
n
k
s
 
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
 
b
y
 
a
 
c
o
n
s
t
a
n
t
 
f
a
c
t
o
r
.
 
M
a
n
y
 
s
u
b
-
p
r
o
b
l
e
m
s
 
t
o
g
e
t
h
e
r
 
d
o
 
l
e
s
s
 
w
o
r
k
 
t
h
a
n
 
t
h
e
 
w
h
o
l
e
 
-
 
b
e
c
a
u
s
e
 
t
h
e
 
c
o
m
b
i
n
e
 
s
t
e
p
 
i
s
 
c
h
e
a
p
.
 
M
e
r
g
e
 
s
o
r
t
:
 
n
 
i
t
e
m
s
 
s
o
r
t
e
d
 
w
i
t
h
 
n
·
l
o
g
 
n
 
w
o
r
k
 
i
n
s
t
e
a
d
 
o
f
 
n
²
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
a
s
t
e
r
 
T
h
e
o
r
e
m
"
,
 
b
o
d
y
:
 
"
F
o
r
 
T
(
n
)
 
=
 
a
·
T
(
n
/
b
)
 
+
 
f
(
n
)
,
 
c
o
m
p
a
r
e
 
f
(
n
)
 
t
o
 
n
^
l
o
g
_
b
(
a
)
.
 
I
f
 
f
 
i
s
 
s
m
a
l
l
e
r
:
 
C
a
s
e
 
1
 
(
l
e
a
v
e
s
 
d
o
m
i
n
a
t
e
)
.
 
I
f
 
e
q
u
a
l
:
 
C
a
s
e
 
2
 
(
l
e
v
e
l
-
w
i
s
e
 
e
q
u
a
l
)
.
 
I
f
 
f
 
i
s
 
l
a
r
g
e
r
:
 
C
a
s
e
 
3
 
(
r
o
o
t
 
d
o
m
i
n
a
t
e
s
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
l
a
s
s
i
c
 
e
x
a
m
p
l
e
s
"
,
 
b
o
d
y
:
 
"
M
e
r
g
e
 
s
o
r
t
 
(
2
T
(
n
/
2
)
 
+
 
n
 
=
 
n
 
l
o
g
 
n
)
.
 
B
i
n
a
r
y
 
s
e
a
r
c
h
 
(
T
(
n
/
2
)
 
+
 
1
 
=
 
l
o
g
 
n
)
.
 
S
t
r
a
s
s
e
n
'
s
 
m
a
t
r
i
x
 
m
u
l
 
(
7
T
(
n
/
2
)
 
+
 
n
²
 
=
 
n
^
2
.
8
1
)
.
 
C
l
o
s
e
s
t
 
p
a
i
r
 
o
f
 
p
o
i
n
t
s
 
(
O
(
n
 
l
o
g
 
n
)
 
v
i
a
 
s
t
r
i
p
 
t
r
i
c
k
)
.
"
 
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
M
e
n
t
a
l
 
m
o
d
e
l
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
R
e
c
u
r
s
i
o
n
 
t
r
e
e
.
 
S
u
m
 
t
h
e
 
l
e
v
e
l
 
w
o
r
k
.
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


 
 
 
 
 
 
 
 
 
 
E
a
c
h
 
l
e
v
e
l
 
m
u
l
t
i
p
l
i
e
s
 
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
 
p
r
o
b
l
e
m
s
 
b
y
 
a
 
a
n
d
 
d
i
v
i
d
e
s
 
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
i
z
e
 
b
y
 
b
.


 
 
 
 
 
 
 
 
 
 
T
h
e
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
t
h
e
 
s
u
m
 
a
c
r
o
s
s
 
l
e
v
e
l
s
 
-
 
t
h
e
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
t
e
l
l
s
 
y
o
u
 
w
h
i
c
h
 
l
e
v
e
l
 
d
o
m
i
n
a
t
e
s
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
g
r
i
d
 
g
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
c
a
r
d
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
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
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
 
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
"
>
0
{
i
 
+
 
1
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
{
s
.
t
i
t
l
e
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
{
s
.
b
o
d
y
}
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
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
q
:
 
"
T
(
n
)
 
=
 
4
T
(
n
/
2
)
 
+
 
n
.
 
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
?
"
,
 
a
:
 
"
n
^
2
"
,
 
h
i
n
t
:
 
"
n
^
l
o
g
₂
4
 
=
 
n
²
;
 
f
=
n
 
i
s
 
s
m
a
l
l
e
r
 
→
 
C
a
s
e
 
1
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
n
 
l
o
g
 
n
.
 
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
?
"
,
 
a
:
 
"
n
 
l
o
g
^
2
 
n
"
,
 
h
i
n
t
:
 
"
C
a
s
e
 
2
 
w
i
t
h
 
e
x
t
r
a
 
l
o
g
 
f
a
c
t
o
r
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
(
n
)
 
=
 
T
(
n
/
2
)
 
+
 
1
.
 
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
?
"
,
 
a
:
 
"
l
o
g
 
n
"
,
 
h
i
n
t
:
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
r
e
c
u
r
r
e
n
c
e
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
t
r
a
s
s
e
n
'
s
 
m
a
t
r
i
x
 
m
u
l
:
 
T
(
n
)
 
=
 
7
T
(
n
/
2
)
 
+
 
n
²
.
 
I
s
 
i
t
 
C
a
s
e
 
1
,
 
2
,
 
o
r
 
3
?
"
,
 
a
:
 
"
1
"
,
 
h
i
n
t
:
 
"
l
o
g
₂
7
 
≈
 
2
.
8
1
 
>
 
2
.
"
 
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
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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
s
t
r
i
n
g
 
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


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
b
o
o
l
e
a
n
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
 
f
a
l
s
e
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
A
p
p
l
y
 
t
h
e
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
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
 
g
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
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
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
p
.
a
.
r
e
p
l
a
c
e
(
/
\
s
+
/
g
,
 
"
"
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
3
 
f
l
e
x
-
w
r
a
p
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
5
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
"
>
#
{
i
 
+
 
1
}
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
f
l
e
x
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
1
0
0
"
>
{
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
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
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
e
s
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
"
w
-
2
8
 
p
x
-
2
.
5
 
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
1
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
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
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
"
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
s
e
m
i
b
o
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
{
`
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
b
o
l
d
 
p
x
-
3
 
p
y
-
1
 
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
l
i
m
e
-
5
0
0
"
 
:
 
"
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
r
o
s
e
-
5
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
✓
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
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
H
i
n
t
:
 
{
p
.
h
i
n
t
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
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
W
h
y
 
t
h
e
 
c
o
m
b
i
n
e
 
s
t
e
p
 
m
a
t
t
e
r
s
 
m
o
s
t
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


 
 
 
 
 
 
 
 
 
 
T
h
e
 
r
e
c
u
r
s
i
o
n
 
i
t
s
e
l
f
 
i
s
 
c
h
e
a
p
 
-
 
s
p
l
i
t
t
i
n
g
 
a
n
 
a
r
r
a
y
 
d
o
e
s
n
&
a
p
o
s
;
t
 
c
o
s
t
 
a
n
y
t
h
i
n
g
 
a
s
y
m
p
t
o
t
i
c
a
l
l
y
.
 
I
t
&
a
p
o
s
;
s
 
t
h
e
 
m
e
r
g
e
 
(
i
n
 
m
e
r
g
e
 
s
o
r
t
)
 
o
r
 
t
h
e
 
s
t
r
i
p
 
c
h
e
c
k
 
(
i
n
 
c
l
o
s
e
s
t
 
p
a
i
r
)
 
t
h
a
t
 
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
 
t
h
e
 
f
i
n
a
l
 
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
 
s
t
r
i
p
 
t
r
i
c
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
f
t
e
r
 
s
o
l
v
i
n
g
 
e
a
c
h
 
h
a
l
f
 
o
f
 
c
l
o
s
e
s
t
-
p
a
i
r
,
 
t
h
e
 
o
n
l
y
 
u
n
c
h
e
c
k
e
d
 
p
a
i
r
s
 
c
r
o
s
s
 
t
h
e
 
d
i
v
i
d
e
r
 
a
n
d
 
a
r
e
 
w
i
t
h
i
n
 
d
 
o
f
 
i
t
.
 
A
 
c
l
a
s
s
i
c
a
l
 
g
e
o
m
e
t
r
i
c
 
a
r
g
u
m
e
n
t
 
s
h
o
w
s
 
e
a
c
h
 
p
o
i
n
t
 
i
n
 
t
h
e
 
s
t
r
i
p
 
n
e
e
d
s
 
t
o
 
c
h
e
c
k
 
a
t
 
m
o
s
t
 
7
 
n
e
i
g
h
b
o
r
s
 
-
 
k
e
e
p
i
n
g
 
c
o
m
b
i
n
e
 
l
i
n
e
a
r
,
 
s
o
 
t
o
t
a
l
 
i
s
 
O
(
n
 
l
o
g
 
n
)
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
t
e
r
v
i
e
w
-
s
t
y
l
e
 
r
e
c
u
r
r
e
n
c
e
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
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
O
(
n
)
 
→
 
O
(
n
 
l
o
g
 
n
)
 
(
m
e
r
g
e
 
s
o
r
t
)
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
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
O
(
1
)
 
→
 
O
(
n
)
 
(
t
r
e
e
 
d
e
p
t
h
 
s
u
m
)
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
T
(
n
)
 
=
 
T
(
n
/
2
)
 
+
 
O
(
n
)
 
→
 
O
(
n
)
 
(
d
e
c
r
e
a
s
i
n
g
-
g
e
o
m
e
t
r
i
c
 
s
e
r
i
e
s
)
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
T
(
n
)
 
=
 
2
T
(
n
-
1
)
 
+
 
O
(
1
)
 
→
 
O
(
2
ⁿ
)
 
(
n
o
t
 
c
o
v
e
r
e
d
 
b
y
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
)
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
6
_
D
i
v
i
d
e
C
o
n
q
u
e
r
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


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[
{
 
i
d
:
 
"
p
r
a
c
t
i
c
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
P
r
a
c
t
i
c
e
"
,
 
i
c
o
n
:
 
<
C
o
d
e
2
 
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
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
 
}
]


 
 
 
 
 
 
:
 
[
]
)
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
 
N
O
T
 
a
 
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
 
a
l
g
o
r
i
t
h
m
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
M
e
r
g
e
 
s
o
r
t
"
,
 
"
Q
u
i
c
k
 
s
o
r
t
"
,
 
"
B
u
b
b
l
e
 
s
o
r
t
"
,
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
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
B
u
b
b
l
e
 
s
o
r
t
 
i
s
 
i
t
e
r
a
t
i
v
e
-
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
 
s
o
r
t
 
-
 
i
t
 
r
e
p
e
a
t
e
d
l
y
 
c
o
m
p
a
r
e
s
 
a
d
j
a
c
e
n
t
 
e
l
e
m
e
n
t
s
 
w
i
t
h
o
u
t
 
s
p
l
i
t
t
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
p
l
y
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
:
 
T
(
n
)
 
=
 
3
T
(
n
/
2
)
 
+
 
n
.
 
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
^
l
o
g
₂
3
)
 
≈
 
O
(
n
^
1
.
5
8
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
l
o
g
_
b
(
a
)
 
=
 
l
o
g
₂
3
 
≈
 
1
.
5
8
 
>
 
1
.
 
f
(
n
)
 
=
 
n
 
i
s
 
p
o
l
y
n
o
m
i
a
l
l
y
 
s
m
a
l
l
e
r
 
→
 
C
a
s
e
 
1
 
→
 
O
(
n
^
l
o
g
₂
3
)
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
e
 
c
l
o
s
e
s
t
-
p
a
i
r
-
o
f
-
p
o
i
n
t
s
 
a
l
g
o
r
i
t
h
m
'
s
 
c
o
m
b
i
n
e
 
s
t
e
p
.
.
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
C
o
m
p
a
r
e
s
 
e
v
e
r
y
 
c
r
o
s
s
-
p
a
i
r
,
 
c
o
s
t
i
n
g
 
O
(
n
²
)
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
c
h
e
c
k
s
 
p
o
i
n
t
s
 
i
n
 
a
 
s
t
r
i
p
 
o
f
 
w
i
d
t
h
 
2
d
 
a
n
d
 
i
s
 
O
(
n
)
"
,


 
 
 
 
 
 
 
 
"
R
e
u
s
e
s
 
t
h
e
 
r
e
c
u
r
s
i
o
n
'
s
 
a
n
s
w
e
r
 
w
i
t
h
o
u
t
 
e
x
t
r
a
 
w
o
r
k
"
,


 
 
 
 
 
 
 
 
"
R
u
n
s
 
a
 
B
F
S
 
o
n
 
t
h
e
 
p
l
a
n
e
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
G
e
o
m
e
t
r
i
c
 
a
r
g
u
m
e
n
t
:
 
a
 
p
o
i
n
t
 
i
n
 
t
h
e
 
s
t
r
i
p
 
n
e
e
d
s
 
t
o
 
c
h
e
c
k
 
a
t
 
m
o
s
t
 
7
 
o
t
h
e
r
s
 
-
 
t
h
e
 
s
t
r
i
p
 
s
c
a
n
 
i
s
 
O
(
n
)
,
 
k
e
e
p
i
n
g
 
t
h
e
 
t
o
t
a
l
 
a
t
 
O
(
n
 
l
o
g
 
n
)
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
F
o
r
 
m
e
r
g
e
 
s
o
r
t
,
 
t
h
e
 
r
e
c
u
r
r
e
n
c
e
 
i
s
 
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
n
.
 
W
h
i
c
h
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
c
a
s
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
C
a
s
e
 
1
"
,
 
"
C
a
s
e
 
2
"
,
 
"
C
a
s
e
 
3
"
,
 
"
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
d
o
e
s
n
'
t
 
a
p
p
l
y
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
n
^
l
o
g
₂
2
 
=
 
n
,
 
w
h
i
c
h
 
m
a
t
c
h
e
s
 
f
(
n
)
 
=
 
n
 
e
x
a
c
t
l
y
 
→
 
C
a
s
e
 
2
 
→
 
O
(
n
 
l
o
g
 
n
)
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
D
i
v
i
d
e
 
&
 
C
o
n
q
u
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
2
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
R
e
c
u
r
r
e
n
c
e
s
 
a
p
p
e
a
r
 
c
o
n
s
t
a
n
t
l
y
 
-
 
k
n
o
w
 
t
h
e
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
c
o
l
d
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
B
a
c
k
t
r
a
c
k
i
n
g
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
