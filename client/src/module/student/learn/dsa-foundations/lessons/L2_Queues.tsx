
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
q
u
e
u
e
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
 
 
T
y
p
e
s
 
/
 
F
r
a
m
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




t
y
p
e
 
M
o
d
e
 
=
 
"
l
i
n
e
a
r
"
 
|
 
"
c
i
r
c
u
l
a
r
"
;


t
y
p
e
 
O
p
K
i
n
d
 
=
 
"
E
"
 
|
 
"
D
"
;


i
n
t
e
r
f
a
c
e
 
O
p
 
{
 
k
i
n
d
:
 
O
p
K
i
n
d
;
 
v
a
l
u
e
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




i
n
t
e
r
f
a
c
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
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
l
i
n
e
a
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


 
 
r
i
n
g
:
 
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
;


 
 
f
r
o
n
t
:
 
n
u
m
b
e
r
;


 
 
r
e
a
r
:
 
n
u
m
b
e
r
;


 
 
s
i
z
e
:
 
n
u
m
b
e
r
;


 
 
c
a
p
a
c
i
t
y
:
 
n
u
m
b
e
r
;


 
 
j
u
s
t
T
o
u
c
h
e
d
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
a
t
u
s
?
:
 
"
o
v
e
r
f
l
o
w
"
 
|
 
"
u
n
d
e
r
f
l
o
w
"
 
|
 
"
o
k
"
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
L
I
N
E
A
R
 
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
 
e
n
q
u
e
u
e
(
q
,
 
x
)
:
"
,


 
 
"
 
 
q
.
i
t
e
m
s
.
a
p
p
e
n
d
(
x
)
 
 
 
/
/
 
r
e
a
r
 
g
r
o
w
s
"
,


 
 
"
"
,


 
 
"
f
u
n
c
t
i
o
n
 
d
e
q
u
e
u
e
(
q
)
:
"
,


 
 
"
 
 
i
f
 
q
.
e
m
p
t
y
:
 
e
r
r
o
r
"
,


 
 
"
 
 
r
e
t
u
r
n
 
q
.
i
t
e
m
s
.
r
e
m
o
v
e
F
i
r
s
t
(
)
"
,


]
;




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
I
R
C
 
=
 
[


 
 
"
c
l
a
s
s
 
C
i
r
c
u
l
a
r
Q
u
e
u
e
(
c
a
p
a
c
i
t
y
)
:
"
,


 
 
"
 
 
b
u
f
[
c
a
p
a
c
i
t
y
]
,
 
f
r
o
n
t
=
0
,
 
r
e
a
r
=
0
,
 
s
i
z
e
=
0
"
,


 
 
"
f
u
n
c
t
i
o
n
 
e
n
q
u
e
u
e
(
x
)
:
"
,


 
 
"
 
 
i
f
 
s
i
z
e
 
=
=
 
c
a
p
a
c
i
t
y
:
 
o
v
e
r
f
l
o
w
"
,


 
 
"
 
 
b
u
f
[
r
e
a
r
]
 
←
 
x
"
,


 
 
"
 
 
r
e
a
r
 
←
 
(
r
e
a
r
 
+
 
1
)
 
m
o
d
 
c
a
p
a
c
i
t
y
"
,


 
 
"
 
 
s
i
z
e
 
←
 
s
i
z
e
 
+
 
1
"
,


 
 
"
f
u
n
c
t
i
o
n
 
d
e
q
u
e
u
e
(
)
:
"
,


 
 
"
 
 
i
f
 
s
i
z
e
 
=
=
 
0
:
 
u
n
d
e
r
f
l
o
w
"
,


 
 
"
 
 
x
 
←
 
b
u
f
[
f
r
o
n
t
]
"
,


 
 
"
 
 
f
r
o
n
t
 
←
 
(
f
r
o
n
t
 
+
 
1
)
 
m
o
d
 
c
a
p
a
c
i
t
y
"
,


 
 
"
 
 
s
i
z
e
 
←
 
s
i
z
e
 
-
 
1
"
,


 
 
"
 
 
r
e
t
u
r
n
 
x
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
 
p
a
r
s
e
O
p
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
 
O
p
[
]
 
{


 
 
r
e
t
u
r
n
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
o
k
)
 
=
>
 
t
o
k
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
.
m
a
p
(
(
t
o
k
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
o
k
.
s
t
a
r
t
s
W
i
t
h
(
"
E
"
)
)
 
r
e
t
u
r
n
 
{
 
k
i
n
d
:
 
"
E
"
 
a
s
 
O
p
K
i
n
d
,
 
v
a
l
u
e
:
 
N
u
m
b
e
r
(
t
o
k
.
s
l
i
c
e
(
1
)
)
 
}
;


 
 
 
 
i
f
 
(
t
o
k
 
=
=
=
 
"
D
"
)
 
r
e
t
u
r
n
 
{
 
k
i
n
d
:
 
"
D
"
 
a
s
 
O
p
K
i
n
d
 
}
;


 
 
 
 
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
;


 
 
}
)
.
f
i
l
t
e
r
(
(
x
)
:
 
x
 
i
s
 
O
p
 
=
>
 
x
 
!
=
=
 
n
u
l
l
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
L
i
n
e
a
r
(
o
p
s
:
 
O
p
[
]
)
:
 
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
 
q
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
a
r
t
 
w
i
t
h
 
e
m
p
t
y
 
q
u
e
u
e
"
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
0
,
 
s
i
z
e
:
 
0
,
 
c
a
p
a
c
i
t
y
:
 
0
 
}
)
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
 
o
p
 
o
f
 
o
p
s
)
 
{


 
 
 
 
i
f
 
(
o
p
.
k
i
n
d
 
=
=
=
 
"
E
"
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
 
0
,
 
v
a
r
s
:
 
{
 
x
:
 
o
p
.
v
a
l
u
e
 
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
e
n
q
u
e
u
e
(
$
{
o
p
.
v
a
l
u
e
}
)
 
-
 
a
p
p
e
n
d
 
a
t
 
r
e
a
r
`
,
 
l
i
n
e
a
r
:
 
[
.
.
.
q
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
q
.
l
e
n
g
t
h
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
,
 
c
a
p
a
c
i
t
y
:
 
0
 
}
)
;


 
 
 
 
 
 
q
.
p
u
s
h
(
o
p
.
v
a
l
u
e
!
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
 
1
,
 
v
a
r
s
:
 
{
 
r
e
a
r
:
 
o
p
.
v
a
l
u
e
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
 
}
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
K
e
y
:
 
"
r
e
a
r
"
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
o
p
.
v
a
l
u
e
}
 
i
n
s
e
r
t
e
d
 
a
t
 
r
e
a
r
`
,
 
l
i
n
e
a
r
:
 
[
.
.
.
q
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
q
.
l
e
n
g
t
h
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
,
 
c
a
p
a
c
i
t
y
:
 
0
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
i
f
 
(
q
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
 
4
,
 
v
a
r
s
:
 
{
 
e
r
r
o
r
:
 
"
u
n
d
e
r
f
l
o
w
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
C
a
n
n
o
t
 
d
e
q
u
e
u
e
 
-
 
q
u
e
u
e
 
e
m
p
t
y
"
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
0
,
 
s
i
z
e
:
 
0
,
 
c
a
p
a
c
i
t
y
:
 
0
,
 
s
t
a
t
u
s
:
 
"
u
n
d
e
r
f
l
o
w
"
 
}
)
;


 
 
 
 
 
 
 
 
c
o
n
t
i
n
u
e
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
 
3
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
 
q
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
 
"
d
e
q
u
e
u
e
(
)
 
-
 
r
e
m
o
v
e
 
f
r
o
m
 
f
r
o
n
t
"
,
 
l
i
n
e
a
r
:
 
[
.
.
.
q
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
q
.
l
e
n
g
t
h
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
,
 
c
a
p
a
c
i
t
y
:
 
0
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
q
.
s
h
i
f
t
(
)
!
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
 
5
,
 
v
a
r
s
:
 
{
 
r
e
m
o
v
e
d
:
 
v
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
 
}
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
K
e
y
:
 
"
r
e
m
o
v
e
d
"
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
m
o
v
e
d
 
$
{
v
}
 
f
r
o
m
 
f
r
o
n
t
`
,
 
l
i
n
e
a
r
:
 
[
.
.
.
q
]
,
 
r
i
n
g
:
 
[
]
,
 
f
r
o
n
t
:
 
0
,
 
r
e
a
r
:
 
q
.
l
e
n
g
t
h
,
 
s
i
z
e
:
 
q
.
l
e
n
g
t
h
,
 
c
a
p
a
c
i
t
y
:
 
0
 
}
)
;


 
 
 
 
}


 
 
}


 
 
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
C
i
r
c
u
l
a
r
(
o
p
s
:
 
O
p
[
]
,
 
c
a
p
:
 
n
u
m
b
e
r
)
:
 
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
 
r
i
n
g
:
 
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
 
=
 
A
r
r
a
y
(
c
a
p
)
.
f
i
l
l
(
n
u
l
l
)
;


 
 
l
e
t
 
f
r
o
n
t
 
=
 
0
,
 
r
e
a
r
 
=
 
0
,
 
s
i
z
e
 
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
 
1
,
 
v
a
r
s
:
 
{
 
c
a
p
a
c
i
t
y
:
 
c
a
p
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
 
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
r
e
a
t
e
 
c
i
r
c
u
l
a
r
 
q
u
e
u
e
 
o
f
 
c
a
p
a
c
i
t
y
 
$
{
c
a
p
}
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
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
 
o
p
 
o
f
 
o
p
s
)
 
{


 
 
 
 
i
f
 
(
o
p
.
k
i
n
d
 
=
=
=
 
"
E
"
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
 
x
:
 
o
p
.
v
a
l
u
e
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
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
e
n
q
u
e
u
e
(
$
{
o
p
.
v
a
l
u
e
}
)
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
;


 
 
 
 
 
 
i
f
 
(
s
i
z
e
 
=
=
=
 
c
a
p
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
 
3
,
 
v
a
r
s
:
 
{
 
e
r
r
o
r
:
 
"
o
v
e
r
f
l
o
w
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
Q
u
e
u
e
 
f
u
l
l
 
-
 
o
v
e
r
f
l
o
w
"
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
,
 
s
t
a
t
u
s
:
 
"
o
v
e
r
f
l
o
w
"
 
}
)
;


 
 
 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
i
n
g
[
r
e
a
r
]
 
=
 
o
p
.
v
a
l
u
e
!
;


 
 
 
 
 
 
c
o
n
s
t
 
p
o
s
 
=
 
r
e
a
r
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
 
"
b
u
f
[
r
e
a
r
]
"
:
 
o
p
.
v
a
l
u
e
,
 
r
e
a
r
 
}
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
K
e
y
:
 
"
r
e
a
r
"
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
W
r
i
t
e
 
$
{
o
p
.
v
a
l
u
e
}
 
a
t
 
b
u
f
[
$
{
r
e
a
r
}
]
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
,
 
j
u
s
t
T
o
u
c
h
e
d
:
 
p
o
s
 
}
)
;


 
 
 
 
 
 
r
e
a
r
 
=
 
(
r
e
a
r
 
+
 
1
)
 
%
 
c
a
p
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
 
5
,
 
v
a
r
s
:
 
{
 
r
e
a
r
 
}
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
K
e
y
:
 
"
r
e
a
r
"
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
v
a
n
c
e
 
r
e
a
r
 
→
 
(
$
{
(
r
e
a
r
 
-
 
1
 
+
 
c
a
p
)
 
%
 
c
a
p
}
 
+
 
1
)
 
m
o
d
 
$
{
c
a
p
}
 
=
 
$
{
r
e
a
r
}
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
;


 
 
 
 
 
 
s
i
z
e
+
+
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
 
6
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
 
}
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
K
e
y
:
 
"
s
i
z
e
"
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
i
z
e
 
n
o
w
 
$
{
s
i
z
e
}
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
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
 
7
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
d
e
q
u
e
u
e
(
)
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
;


 
 
 
 
 
 
i
f
 
(
s
i
z
e
 
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
 
8
,
 
v
a
r
s
:
 
{
 
e
r
r
o
r
:
 
"
u
n
d
e
r
f
l
o
w
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
E
m
p
t
y
 
-
 
u
n
d
e
r
f
l
o
w
"
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
,
 
s
t
a
t
u
s
:
 
"
u
n
d
e
r
f
l
o
w
"
 
}
)
;


 
 
 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
r
i
n
g
[
f
r
o
n
t
]
!
;


 
 
 
 
 
 
c
o
n
s
t
 
p
o
s
 
=
 
f
r
o
n
t
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
 
9
,
 
v
a
r
s
:
 
{
 
"
b
u
f
[
f
r
o
n
t
]
"
:
 
v
,
 
f
r
o
n
t
 
}
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
K
e
y
:
 
"
f
r
o
n
t
"
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
a
d
 
$
{
v
}
 
f
r
o
m
 
b
u
f
[
$
{
f
r
o
n
t
}
]
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
,
 
j
u
s
t
T
o
u
c
h
e
d
:
 
p
o
s
 
}
)
;


 
 
 
 
 
 
r
i
n
g
[
f
r
o
n
t
]
 
=
 
n
u
l
l
;


 
 
 
 
 
 
f
r
o
n
t
 
=
 
(
f
r
o
n
t
 
+
 
1
)
 
%
 
c
a
p
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
0
,
 
v
a
r
s
:
 
{
 
f
r
o
n
t
 
}
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
K
e
y
:
 
"
f
r
o
n
t
"
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
v
a
n
c
e
 
f
r
o
n
t
 
→
 
(
$
{
(
f
r
o
n
t
 
-
 
1
 
+
 
c
a
p
)
 
%
 
c
a
p
}
 
+
 
1
)
 
m
o
d
 
$
{
c
a
p
}
 
=
 
$
{
f
r
o
n
t
}
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
;


 
 
 
 
 
 
s
i
z
e
-
-
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
,
 
r
e
t
u
r
n
e
d
:
 
v
 
}
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
K
e
y
:
 
"
s
i
z
e
"
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
e
q
u
e
u
e
d
 
$
{
v
}
,
 
s
i
z
e
 
n
o
w
 
$
{
s
i
z
e
}
`
,
 
l
i
n
e
a
r
:
 
[
]
,
 
r
i
n
g
:
 
[
.
.
.
r
i
n
g
]
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
:
 
c
a
p
 
}
)
;


 
 
 
 
}


 
 
}


 
 
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
 
 
C
i
r
c
u
l
a
r
 
r
i
n
g
 
v
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
R
i
n
g
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
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
 
{
 
r
i
n
g
,
 
f
r
o
n
t
,
 
r
e
a
r
,
 
s
i
z
e
,
 
c
a
p
a
c
i
t
y
 
}
 
=
 
f
r
a
m
e
;


 
 
c
o
n
s
t
 
n
 
=
 
c
a
p
a
c
i
t
y
;


 
 
c
o
n
s
t
 
R
 
=
 
1
2
0
,
 
C
X
 
=
 
1
8
0
,
 
C
Y
 
=
 
1
6
0
;


 
 
c
o
n
s
t
 
u
t
i
l
 
=
 
(
s
i
z
e
 
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
 
c
a
p
a
c
i
t
y
)
)
 
*
 
1
0
0
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
 
g
a
p
-
6
 
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
 
f
l
e
x
-
w
r
a
p
 
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
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
3
6
0
}
 
h
e
i
g
h
t
=
{
3
2
0
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
C
X
}
 
c
y
=
{
C
Y
}
 
r
=
{
R
 
+
 
3
0
}
 
f
i
l
l
=
"
n
o
n
e
"
 
s
t
r
o
k
e
=
{
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
}
 
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
1
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
4
 
3
"
 
/
>


 
 
 
 
 
 
 
 
{
r
i
n
g
.
m
a
p
(
(
v
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
 
a
 
=
 
(
i
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
C
X
 
+
 
R
 
*
 
M
a
t
h
.
c
o
s
(
a
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
C
Y
 
+
 
R
 
*
 
M
a
t
h
.
s
i
n
(
a
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
r
o
n
t
 
=
 
i
 
=
=
=
 
f
r
o
n
t
 
&
&
 
s
i
z
e
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
R
e
a
r
 
=
 
i
 
=
=
=
 
(
r
e
a
r
 
-
 
1
 
+
 
n
)
 
%
 
n
 
&
&
 
s
i
z
e
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
l
a
s
h
e
d
 
=
 
f
r
a
m
e
.
j
u
s
t
T
o
u
c
h
e
d
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
a
s
V
a
l
 
=
 
v
 
!
=
=
 
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
 
c
o
l
o
r
 
=
 
h
a
s
V
a
l
 
?
 
(
i
s
F
r
o
n
t
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
i
s
R
e
a
r
 
?
 
"
#
1
0
b
9
8
1
"
 
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
)
 
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
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
f
l
a
s
h
e
d
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
h
a
s
V
a
l
 
?
 
`
$
{
c
o
l
o
r
}
2
2
`
 
:
 
T
H
E
M
E
.
b
g
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
i
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
x
}
 
c
y
=
{
y
}
 
r
=
{
2
4
}
 
f
i
l
l
=
{
b
g
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
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
.
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
x
}
 
y
=
{
y
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
3
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
h
a
s
V
a
l
 
?
 
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
,
 
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
:
 
T
H
E
M
E
.
m
o
n
o
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
?
?
 
"
∅
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
M
a
t
h
.
c
o
s
(
a
)
 
*
 
3
4
}
 
y
=
{
y
 
+
 
M
a
t
h
.
s
i
n
(
a
)
 
*
 
3
4
 
+
 
3
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
9
,
 
f
i
l
l
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
,
 
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
:
 
T
H
E
M
E
.
m
o
n
o
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
i
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
{
/
*
 
f
r
o
n
t
 
p
o
i
n
t
e
r
 
*
/
}


 
 
 
 
 
 
 
 
{
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
 
(
f
r
o
n
t
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
C
X
 
+
 
(
R
 
-
 
5
0
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
,
 
y
1
 
=
 
C
Y
 
+
 
(
R
 
-
 
5
0
)
 
*
 
M
a
t
h
.
s
i
n
(
a
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
C
X
 
+
 
(
R
 
-
 
2
6
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
,
 
y
2
 
=
 
C
Y
 
+
 
(
R
 
-
 
2
6
)
 
*
 
M
a
t
h
.
s
i
n
(
a
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
1
}
 
y
1
=
{
y
1
}
 
x
2
=
{
x
2
}
 
y
2
=
{
y
2
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
3
b
8
2
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
.
5
}
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
-
q
-
f
r
o
n
t
)
"
 
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
C
X
 
+
 
(
R
 
-
 
6
6
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
}
 
y
=
{
C
Y
 
+
 
(
R
 
-
 
6
6
)
 
*
 
M
a
t
h
.
s
i
n
(
a
)
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
1
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
"
#
3
b
8
2
f
6
"
,
 
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
:
 
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
}
>
f
r
o
n
t
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
(
)
}


 
 
 
 
 
 
 
 
{
/
*
 
r
e
a
r
 
p
o
i
n
t
e
r
 
*
/
}


 
 
 
 
 
 
 
 
{
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
 
(
r
e
a
r
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
C
X
 
+
 
(
R
 
+
 
5
2
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
,
 
y
1
 
=
 
C
Y
 
+
 
(
R
 
+
 
5
2
)
 
*
 
M
a
t
h
.
s
i
n
(
a
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
C
X
 
+
 
(
R
 
+
 
2
8
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
,
 
y
2
 
=
 
C
Y
 
+
 
(
R
 
+
 
2
8
)
 
*
 
M
a
t
h
.
s
i
n
(
a
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
1
}
 
y
1
=
{
y
1
}
 
x
2
=
{
x
2
}
 
y
2
=
{
y
2
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
1
0
b
9
8
1
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
.
5
}
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
-
q
-
r
e
a
r
)
"
 
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
C
X
 
+
 
(
R
 
+
 
6
6
)
 
*
 
M
a
t
h
.
c
o
s
(
a
)
}
 
y
=
{
C
Y
 
+
 
(
R
 
+
 
6
6
)
 
*
 
M
a
t
h
.
s
i
n
(
a
)
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
1
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
"
#
1
0
b
9
8
1
"
,
 
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
:
 
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
}
>
r
e
a
r
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
(
)
}


 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
-
q
-
f
r
o
n
t
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
3
b
8
2
f
6
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
-
q
-
r
e
a
r
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
/
d
e
f
s
>


 
 
 
 
 
 
<
/
s
v
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
"
>
U
t
i
l
i
z
a
t
i
o
n
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
r
e
l
a
t
i
v
e
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
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
"
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
4
4
,
 
h
e
i
g
h
t
:
 
1
8
0
 
}
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
`
$
{
u
t
i
l
}
%
`
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
 
u
t
i
l
 
>
 
8
0
 
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
 
u
t
i
l
 
>
 
5
0
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
"
#
1
0
b
9
8
1
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
s
m
 
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
s
i
z
e
}
/
{
c
a
p
a
c
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
 
 
L
i
n
e
a
r
 
q
u
e
u
e
 
v
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
e
a
r
Q
u
e
u
e
V
i
z
(
{
 
i
t
e
m
s
 
}
:
 
{
 
i
t
e
m
s
:
 
n
u
m
b
e
r
[
]
 
}
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
1
"
>
Q
u
e
u
e
 
(
f
r
o
n
t
 
→
 
r
e
a
r
)
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
 
p
-
3
 
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
 
m
i
n
-
w
-
4
8
 
m
i
n
-
h
-
1
2
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
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
"
>
e
m
p
t
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
i
t
e
m
s
.
m
a
p
(
(
v
,
 
i
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
i
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
m
 
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
 
`
$
{
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
2
2
`
,
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
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
`
,
 
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
,
 
m
i
n
W
i
d
t
h
:
 
3
6
 
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
M
o
d
e
>
(
"
l
i
n
e
a
r
"
)
;


 
 
c
o
n
s
t
 
[
o
p
s
S
t
r
,
 
s
e
t
O
p
s
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
E
5
,
 
E
1
0
,
 
E
1
5
,
 
D
,
 
E
2
0
,
 
D
"
)
;


 
 
c
o
n
s
t
 
[
c
a
p
,
 
s
e
t
C
a
p
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
5
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
 
{


 
 
 
 
 
 
c
o
n
s
t
 
o
p
s
 
=
 
p
a
r
s
e
O
p
s
(
o
p
s
S
t
r
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
m
o
d
e
 
=
=
=
 
"
l
i
n
e
a
r
"
 
?
 
b
u
i
l
d
L
i
n
e
a
r
(
o
p
s
)
 
:
 
b
u
i
l
d
C
i
r
c
u
l
a
r
(
o
p
s
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
1
,
 
c
a
p
)
)
;


 
 
 
 
}
,


 
 
 
 
[
m
o
d
e
,
 
o
p
s
S
t
r
,
 
c
a
p
]
,


 
 
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


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
m
o
d
e
 
=
=
=
 
"
l
i
n
e
a
r
"
 
?
 
P
S
E
U
D
O
_
L
I
N
E
A
R
 
:
 
P
S
E
U
D
O
_
C
I
R
C
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
{
m
o
d
e
 
=
=
=
 
"
l
i
n
e
a
r
"
 
?
 
"
Q
u
e
u
e
 
(
F
I
F
O
)
"
 
:
 
"
C
i
r
c
u
l
a
r
 
Q
u
e
u
e
,
 
R
i
n
g
 
B
u
f
f
e
r
"
}


 
 
 
 
 
 
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
l
i
n
e
a
r
"
,
 
"
c
i
r
c
u
l
a
r
"
]
 
a
s
 
M
o
d
e
[
]
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
 
c
a
p
i
t
a
l
i
z
e
"
>
{
m
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
O
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


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
o
p
s
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
 
E
5
,
 
E
1
0
,
 
D
,
 
E
1
5
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
<
n
>
 
=
 
e
n
q
u
e
u
e
 
n
;
 
D
 
=
 
d
e
q
u
e
u
e
.
 
C
o
m
m
a
 
o
r
 
s
p
a
c
e
 
s
e
p
a
r
a
t
e
d
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
E
n
q
u
e
u
e
 
o
n
l
y
"
,
 
v
a
l
u
e
:
 
"
E
1
,
 
E
2
,
 
E
3
,
 
E
4
,
 
E
5
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
M
i
x
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
 
"
E
5
,
 
E
1
0
,
 
D
,
 
E
1
5
,
 
D
,
 
E
2
0
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
W
r
a
p
-
a
r
o
u
n
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
E
1
,
 
E
2
,
 
E
3
,
 
D
,
 
D
,
 
E
4
,
 
E
5
,
 
E
6
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
U
n
d
e
r
f
l
o
w
"
,
 
v
a
l
u
e
:
 
"
D
,
 
D
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
O
p
s
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
6
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
k
s
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
)
 
=
>
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
<
 
0
.
6
5
 
?
 
`
E
$
{
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
9
0
)
 
+
 
1
0
}
`
 
:
 
"
D
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
O
p
s
S
t
r
(
t
o
k
s
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
c
i
r
c
u
l
a
r
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
p
a
c
i
t
y
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
u
m
b
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
c
a
p
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
 
s
e
t
C
a
p
(
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
 
N
u
m
b
e
r
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
 
|
|
 
1
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}
 
m
a
x
=
{
1
2
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
1
6
 
p
x
-
2
 
p
y
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
K
e
y
 
?
 
[
f
r
a
m
e
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
K
e
y
]
 
:
 
[
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
4
"
>


 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
l
i
n
e
a
r
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
e
a
r
Q
u
e
u
e
V
i
z
 
i
t
e
m
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
l
i
n
e
a
r
 
?
?
 
[
]
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
s
t
a
t
u
s
 
=
=
=
 
"
u
n
d
e
r
f
l
o
w
"
 
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
p
x
-
4
 
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
r
o
s
e
-
3
0
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
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
N
D
E
R
F
L
O
W


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
R
i
n
g
V
i
z
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
s
t
a
t
u
s
 
=
=
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
"
 
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
p
x
-
4
 
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
r
o
s
e
-
3
0
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
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
V
E
R
F
L
O
W


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
s
t
a
t
u
s
 
=
=
=
 
"
u
n
d
e
r
f
l
o
w
"
 
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
p
x
-
4
 
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
r
o
s
e
-
3
0
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
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
N
D
E
R
F
L
O
W


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
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
:
 
"
F
I
F
O
,
 
F
i
r
s
t
 
I
n
,
 
F
i
r
s
t
 
O
u
t
"
,
 
b
:
 
"
T
h
e
 
e
l
e
m
e
n
t
 
t
h
a
t
 
h
a
s
 
b
e
e
n
 
w
a
i
t
i
n
g
 
t
h
e
 
l
o
n
g
e
s
t
 
i
s
 
s
e
r
v
e
d
 
f
i
r
s
t
.
 
L
i
k
e
 
a
 
l
i
n
e
 
a
t
 
a
 
c
o
f
f
e
e
 
s
h
o
p
:
 
j
o
i
n
 
t
h
e
 
b
a
c
k
,
 
l
e
a
v
e
 
t
h
e
 
f
r
o
n
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
T
w
o
 
p
o
i
n
t
e
r
s
:
 
f
r
o
n
t
 
a
n
d
 
r
e
a
r
"
,
 
b
:
 
"
F
r
o
n
t
 
i
s
 
w
h
e
r
e
 
y
o
u
 
d
e
q
u
e
u
e
;
 
r
e
a
r
 
i
s
 
w
h
e
r
e
 
y
o
u
 
e
n
q
u
e
u
e
.
 
B
o
t
h
 
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
 
a
r
e
 
O
(
1
)
 
w
h
e
n
 
i
m
p
l
e
m
e
n
t
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
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
T
h
e
 
c
i
r
c
u
l
a
r
 
(
r
i
n
g
)
 
b
u
f
f
e
r
 
t
r
i
c
k
"
,
 
b
:
 
"
A
r
r
a
y
-
b
a
c
k
e
d
 
q
u
e
u
e
 
w
i
t
h
 
a
 
w
r
a
p
a
r
o
u
n
d
:
 
w
h
e
n
 
r
e
a
r
 
r
e
a
c
h
e
s
 
c
a
p
a
c
i
t
y
,
 
i
t
 
w
r
a
p
s
 
t
o
 
0
.
 
F
i
x
e
d
 
s
i
z
e
,
 
n
o
 
s
h
i
f
t
i
n
g
,
 
O
(
1
)
 
o
p
s
.
 
U
s
e
d
 
i
n
 
a
u
d
i
o
 
d
r
i
v
e
r
s
,
 
n
e
t
w
o
r
k
 
p
a
c
k
e
t
 
b
u
f
f
e
r
s
,
 
a
n
d
 
p
r
o
d
u
c
e
r
-
c
o
n
s
u
m
e
r
 
p
i
p
e
l
i
n
e
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
e
n
 
i
s
 
i
t
 
f
u
l
l
 
v
s
 
e
m
p
t
y
?
"
,
 
b
:
 
"
B
o
t
h
 
c
a
n
 
m
a
k
e
 
s
i
z
e
=
=
0
.
 
S
o
l
u
t
i
o
n
:
 
k
e
e
p
 
a
 
s
e
p
a
r
a
t
e
 
s
i
z
e
 
c
o
u
n
t
e
r
 
(
w
h
a
t
 
w
e
 
d
o
 
h
e
r
e
)
,
 
o
r
 
s
a
c
r
i
f
i
c
e
 
o
n
e
 
s
l
o
t
 
s
o
 
'
f
u
l
l
'
 
m
e
a
n
s
 
r
e
a
r
 
=
=
 
(
f
r
o
n
t
-
1
)
 
m
o
d
 
c
a
p
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
s
t
a
c
k
 
v
s
 
q
u
e
u
e
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
S
a
m
e
 
O
(
1
)
 
o
p
s
,
 
o
p
p
o
s
i
t
e
 
e
n
d
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


 
 
 
 
 
 
 
 
 
 
S
t
a
c
k
 
=
 
n
e
w
e
s
t
 
g
o
e
s
 
o
u
t
 
f
i
r
s
t
 
(
L
I
F
O
)
.
 
Q
u
e
u
e
 
=
 
o
l
d
e
s
t
 
g
o
e
s
 
o
u
t
 
f
i
r
s
t
 
(
F
I
F
O
)
.
 
B
o
t
h
 
h
a
v
e
 
O
(
1
)


 
 
 
 
 
 
 
 
 
 
i
n
s
e
r
t
 
a
n
d
 
r
e
m
o
v
e
,
 
b
u
t
 
f
r
o
m
 
o
p
p
o
s
i
t
e
 
e
n
d
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
r
i
d
-
c
o
l
s
-
1
 
s
m
:
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
2
 
g
a
p
-
3
"
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
c
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
2
 
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
c
.
t
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
c
.
b
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
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
T
r
a
c
e
:
 
E
1
,
 
E
2
,
 
E
3
,
 
D
,
 
E
4
,
 
D
.
 
F
i
n
a
l
 
q
u
e
u
e
 
c
o
n
t
e
n
t
s
 
(
f
r
o
n
t
 
t
o
 
r
e
a
r
)
?
"
,
 
a
:
 
"
3
,
 
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
C
i
r
c
u
l
a
r
 
q
u
e
u
e
,
 
c
a
p
=
4
.
 
A
f
t
e
r
 
E
1
,
E
2
,
E
3
,
E
4
,
D
,
E
5
,
 
w
h
a
t
'
s
 
a
t
 
b
u
f
[
0
]
?
"
,
 
a
:
 
"
5
 
(
w
r
a
p
p
e
d
 
a
r
o
u
n
d
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
B
F
S
 
u
s
e
s
 
w
h
i
c
h
 
l
i
n
e
a
r
 
s
t
r
u
c
t
u
r
e
?
"
,
 
a
:
 
"
Q
u
e
u
e
"
 
}
,


 
 
 
 
{
 
q
:
 
"
A
f
t
e
r
 
E
7
 
t
w
i
c
e
 
a
n
d
 
D
 
o
n
c
e
 
o
n
 
a
n
 
e
m
p
t
y
 
q
u
e
u
e
,
 
s
i
z
e
?
"
,
 
a
:
 
"
1
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
,
 
s
e
t
G
u
e
s
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
,
 
s
e
t
S
h
o
w
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
T
r
a
c
e
 
e
a
c
h
,
 
t
h
e
n
 
r
e
v
e
a
l
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
3
"
>
#
{
i
 
+
 
1
}
 
{
p
.
q
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
l
e
x
 
g
a
p
-
2
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
[
i
]
 
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
(
v
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
-
w
-
4
8
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
e
d
i
u
m
 
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
s
h
o
w
[
i
]
 
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
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
W
h
y
 
c
i
r
c
u
l
a
r
 
b
e
a
t
s
 
n
a
i
v
e
 
a
r
r
a
y
-
q
u
e
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
 
n
a
i
v
e
 
a
r
r
a
y
 
q
u
e
u
e
 
s
h
i
f
t
s
 
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
 
l
e
f
t
 
o
n
 
d
e
q
u
e
u
e
,
 
O
(
n
)
.
 
A
 
c
i
r
c
u
l
a
r
 
q
u
e
u
e
 
j
u
s
t


 
 
 
 
 
 
 
 
 
 
a
d
v
a
n
c
e
s
 
t
h
e
 
f
r
o
n
t
 
i
n
d
e
x
,
 
O
(
1
)
.
 
S
a
m
e
 
m
e
m
o
r
y
,
 
o
n
e
 
l
i
n
e
 
o
f
 
m
o
d
u
l
o
 
a
r
i
t
h
m
e
t
i
c
,
 
m
a
s
s
i
v
e


 
 
 
 
 
 
 
 
 
 
s
p
e
e
d
u
p
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
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
b
e
h
i
n
d
 
y
o
u
r
 
k
e
y
b
o
a
r
d
'
s
 
t
y
p
e
a
h
e
a
d
 
b
u
f
f
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
Q
u
e
u
e
s
 
i
n
 
s
y
s
t
e
m
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
 
s
p
a
c
e
-
y
-
1
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
P
U
 
s
c
h
e
d
u
l
i
n
g
 
(
r
o
u
n
d
-
r
o
b
i
n
 
p
r
o
c
e
s
s
 
q
u
e
u
e
)
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
P
r
i
n
t
e
r
 
j
o
b
 
s
p
o
o
l
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
B
F
S
 
t
r
a
v
e
r
s
a
l
 
i
n
 
g
r
a
p
h
s
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
K
a
f
k
a
 
/
 
R
a
b
b
i
t
M
Q
 
m
e
s
s
a
g
e
 
b
r
o
k
e
r
s
 
(
p
e
r
s
i
s
t
e
n
t
 
q
u
e
u
e
s
)
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
e
b
 
s
e
r
v
e
r
 
r
e
q
u
e
s
t
 
q
u
e
u
e
s
 
u
n
d
e
r
 
l
o
a
d
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


/
*
 
 
R
o
o
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
2
_
Q
u
e
u
e
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
A
 
q
u
e
u
e
 
r
e
m
o
v
e
s
 
e
l
e
m
e
n
t
s
 
i
n
 
w
h
i
c
h
 
o
r
d
e
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
L
a
s
t
-
i
n
 
f
i
r
s
t
-
o
u
t
"
,
 
"
F
i
r
s
t
-
i
n
 
f
i
r
s
t
-
o
u
t
"
,
 
"
R
a
n
d
o
m
"
,
 
"
P
r
i
o
r
i
t
y
-
b
a
s
e
d
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
F
I
F
O
,
 
e
l
e
m
e
n
t
s
 
l
e
a
v
e
 
i
n
 
a
r
r
i
v
a
l
 
o
r
d
e
r
.
 
C
o
n
t
r
a
s
t
 
w
i
t
h
 
a
 
s
t
a
c
k
 
(
L
I
F
O
)
 
o
r
 
a
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
 
(
m
i
n
/
m
a
x
 
f
i
r
s
t
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
I
n
 
a
 
c
i
r
c
u
l
a
r
 
q
u
e
u
e
 
o
f
 
c
a
p
a
c
i
t
y
 
5
 
w
i
t
h
 
f
r
o
n
t
=
3
 
a
n
d
 
s
i
z
e
=
4
,
 
w
h
a
t
 
i
s
 
r
e
a
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
2
"
,
 
"
7
"
,
 
"
4
"
,
 
"
0
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
 
0
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
r
e
a
r
 
=
 
(
f
r
o
n
t
 
+
 
s
i
z
e
)
 
m
o
d
 
c
a
p
a
c
i
t
y
 
=
 
(
3
 
+
 
4
)
 
m
o
d
 
5
 
=
 
2
.
 
R
e
a
r
 
h
a
s
 
w
r
a
p
p
e
d
 
a
r
o
u
n
d
 
p
a
s
t
 
i
n
d
e
x
 
4
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
y
 
i
s
 
a
 
c
i
r
c
u
l
a
r
 
a
r
r
a
y
 
p
r
e
f
e
r
r
e
d
 
o
v
e
r
 
a
 
l
i
n
e
a
r
 
a
r
r
a
y
 
f
o
r
 
a
 
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
 
q
u
e
u
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
i
r
c
u
l
a
r
 
u
s
e
s
 
l
e
s
s
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
C
i
r
c
u
l
a
r
 
a
v
o
i
d
s
 
t
h
e
 
O
(
n
)
 
s
h
i
f
t
 
o
n
 
d
e
q
u
e
u
e
"
,


 
 
 
 
 
 
 
 
"
C
i
r
c
u
l
a
r
 
i
s
 
e
a
s
i
e
r
 
t
o
 
c
o
d
e
"
,


 
 
 
 
 
 
 
 
"
L
i
n
e
a
r
 
d
o
e
s
 
n
o
t
 
s
u
p
p
o
r
t
 
e
n
q
u
e
u
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
A
d
v
a
n
c
i
n
g
 
a
n
 
i
n
d
e
x
 
i
s
 
O
(
1
)
 
v
s
 
s
h
i
f
t
i
n
g
 
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
 
l
e
f
t
 
(
O
(
n
)
)
.
 
M
e
m
o
r
y
 
u
s
a
g
e
 
i
s
 
i
d
e
n
t
i
c
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
I
f
 
a
 
c
i
r
c
u
l
a
r
 
q
u
e
u
e
 
o
f
 
c
a
p
a
c
i
t
y
 
C
 
h
a
s
 
s
i
z
e
 
=
=
 
C
,
 
a
t
t
e
m
p
t
i
n
g
 
a
n
o
t
h
e
r
 
e
n
q
u
e
u
e
 
p
r
o
d
u
c
e
s
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
i
l
e
n
t
 
n
o
-
o
p
"
,
 
"
O
v
e
r
f
l
o
w
 
(
e
r
r
o
r
)
"
,
 
"
A
u
t
o
m
a
t
i
c
 
r
e
s
i
z
e
"
,
 
"
D
e
q
u
e
u
e
 
o
f
 
f
r
o
n
t
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
F
i
x
e
d
-
c
a
p
a
c
i
t
y
 
r
i
n
g
 
b
u
f
f
e
r
s
 
r
e
p
o
r
t
 
o
v
e
r
f
l
o
w
.
 
G
r
o
w
a
b
l
e
 
q
u
e
u
e
s
 
(
d
e
q
u
e
/
l
i
n
k
e
d
 
l
i
s
t
)
 
w
o
u
l
d
 
j
u
s
t
 
a
l
l
o
c
a
t
e
 
m
o
r
e
 
s
p
a
c
e
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
Q
u
e
u
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
2
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
B
F
S
,
 
s
c
h
e
d
u
l
i
n
g
,
 
p
r
o
d
u
c
e
r
-
c
o
n
s
u
m
e
r
 
p
a
t
t
e
r
n
s
 
a
l
l
 
u
s
e
 
q
u
e
u
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
S
i
n
g
l
y
 
L
i
n
k
e
d
 
L
i
s
t
s
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


