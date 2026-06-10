
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
d
e
q
u
e
"
 
|
 
"
m
o
n
o
t
o
n
i
c
"
;


t
y
p
e
 
D
O
p
 
=
 
"
P
F
"
 
|
 
"
P
B
"
 
|
 
"
R
F
"
 
|
 
"
R
B
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
 
D
e
q
u
e
O
p
 
{
 
k
i
n
d
:
 
D
O
p
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


 
 
d
e
q
u
e
:
 
{
 
v
a
l
u
e
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
x
?
:
 
n
u
m
b
e
r
;
 
f
l
a
s
h
?
:
 
"
e
n
t
e
r
"
 
|
 
"
p
o
p
-
v
i
o
l
a
t
e
"
 
}
[
]
;


 
 
a
r
r
a
y
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


 
 
s
t
a
t
e
s
?
:
 
(
"
d
e
f
a
u
l
t
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
a
t
c
h
"
)
[
]
;


 
 
w
i
n
d
o
w
L
o
?
:
 
n
u
m
b
e
r
;


 
 
w
i
n
d
o
w
H
i
?
:
 
n
u
m
b
e
r
;


 
 
i
?
:
 
n
u
m
b
e
r
;


 
 
m
a
x
A
t
S
t
e
p
?
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
M
O
N
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
 
s
l
i
d
i
n
g
M
a
x
(
a
r
r
,
 
k
)
:
"
,


 
 
"
 
 
d
q
 
←
 
e
m
p
t
y
 
(
s
t
o
r
e
s
 
i
n
d
i
c
e
s
)
"
,


 
 
"
 
 
r
e
s
u
l
t
 
←
 
[
]
"
,


 
 
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
-
1
:
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
d
q
 
n
o
t
 
e
m
p
t
y
 
a
n
d
 
d
q
.
f
r
o
n
t
 
≤
 
i
 
-
 
k
:
"
,


 
 
"
 
 
 
 
 
 
d
q
.
p
o
p
F
r
o
n
t
(
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
d
r
o
p
 
o
u
t
-
o
f
-
w
i
n
d
o
w
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
d
q
 
n
o
t
 
e
m
p
t
y
 
a
n
d
 
a
r
r
[
d
q
.
b
a
c
k
]
 
<
 
a
r
r
[
i
]
:
"
,


 
 
"
 
 
 
 
 
 
d
q
.
p
o
p
B
a
c
k
(
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
v
i
o
l
a
t
o
r
 
→
 
p
o
p
"
,


 
 
"
 
 
 
 
d
q
.
p
u
s
h
B
a
c
k
(
i
)
"
,


 
 
"
 
 
 
 
i
f
 
i
 
≥
 
k
 
-
 
1
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
.
a
p
p
e
n
d
(
a
r
r
[
d
q
.
f
r
o
n
t
]
)
 
 
 
/
/
 
w
i
n
d
o
w
 
m
a
x
"
,


 
 
"
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
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
D
E
Q
U
E
 
=
 
[


 
 
"
c
l
a
s
s
 
D
e
q
u
e
:
"
,


 
 
"
 
 
p
u
s
h
F
r
o
n
t
(
x
)
 
/
/
 
i
n
s
e
r
t
 
a
t
 
l
e
f
t
"
,


 
 
"
 
 
p
u
s
h
B
a
c
k
(
x
)
 
 
/
/
 
i
n
s
e
r
t
 
a
t
 
r
i
g
h
t
"
,


 
 
"
 
 
p
o
p
F
r
o
n
t
(
)
 
 
 
/
/
 
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
 
l
e
f
t
"
,


 
 
"
 
 
p
o
p
B
a
c
k
(
)
 
 
 
 
/
/
 
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
 
r
i
g
h
t
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
 
D
e
q
u
e
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
)
 
=
>
 
t
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
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
P
F
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
P
F
"
 
a
s
 
D
O
p
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
.
s
l
i
c
e
(
2
)
)
 
}
;


 
 
 
 
i
f
 
(
t
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
P
B
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
P
B
"
 
a
s
 
D
O
p
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
.
s
l
i
c
e
(
2
)
)
 
}
;


 
 
 
 
i
f
 
(
t
 
=
=
=
 
"
R
F
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
R
F
"
 
a
s
 
D
O
p
 
}
;


 
 
 
 
i
f
 
(
t
 
=
=
=
 
"
R
B
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
R
B
"
 
a
s
 
D
O
p
 
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
 
D
e
q
u
e
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
 
p
a
r
s
e
L
i
s
t
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
 
n
u
m
b
e
r
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
.
t
r
i
m
(
)
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
(
x
)
 
=
>
 
!
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
(
x
)
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
D
e
q
u
e
(
o
p
s
:
 
D
e
q
u
e
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
 
d
q
:
 
{
 
v
a
l
u
e
:
 
n
u
m
b
e
r
 
}
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
E
m
p
t
y
 
d
e
q
u
e
"
,
 
d
e
q
u
e
:
 
[
]
 
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
P
F
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
 
1
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
:
 
d
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
 
`
p
u
s
h
F
r
o
n
t
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
,
 
i
n
s
e
r
t
 
a
t
 
l
e
f
t
`
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
}
)
;


 
 
 
 
 
 
d
q
.
u
n
s
h
i
f
t
(
{
 
v
a
l
u
e
:
 
o
p
.
v
a
l
u
e
!
 
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
 
d
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
 
n
o
w
 
a
t
 
f
r
o
n
t
`
,
 
d
e
q
u
e
:
 
d
q
.
m
a
p
(
(
d
,
 
i
)
 
=
>
 
(
{
 
.
.
.
d
,
 
f
l
a
s
h
:
 
i
 
=
=
=
 
0
 
?
 
"
e
n
t
e
r
"
 
a
s
 
c
o
n
s
t
 
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
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
P
B
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
:
 
d
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
 
`
p
u
s
h
B
a
c
k
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
,
 
i
n
s
e
r
t
 
a
t
 
r
i
g
h
t
`
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
}
)
;


 
 
 
 
 
 
d
q
.
p
u
s
h
(
{
 
v
a
l
u
e
:
 
o
p
.
v
a
l
u
e
!
 
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
 
2
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
 
d
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
 
n
o
w
 
a
t
 
r
e
a
r
`
,
 
d
e
q
u
e
:
 
d
q
.
m
a
p
(
(
d
,
 
i
)
 
=
>
 
(
{
 
.
.
.
d
,
 
f
l
a
s
h
:
 
i
 
=
=
=
 
d
q
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
e
n
t
e
r
"
 
a
s
 
c
o
n
s
t
 
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
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
R
F
"
)
 
{


 
 
 
 
 
 
i
f
 
(
d
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
e
m
p
t
y
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
p
o
p
F
r
o
n
t
(
)
 
o
n
 
e
m
p
t
y
 
d
e
q
u
e
"
,
 
d
e
q
u
e
:
 
[
]
 
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
 
f
r
o
n
t
:
 
d
q
[
0
]
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
p
o
p
F
r
o
n
t
(
)
,
 
r
e
m
o
v
e
 
$
{
d
q
[
0
]
.
v
a
l
u
e
}
`
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
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
 
d
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
 
3
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
 
d
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
.
v
a
l
u
e
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
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
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
R
B
"
)
 
{


 
 
 
 
 
 
i
f
 
(
d
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
e
m
p
t
y
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
p
o
p
B
a
c
k
(
)
 
o
n
 
e
m
p
t
y
 
d
e
q
u
e
"
,
 
d
e
q
u
e
:
 
[
]
 
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
 
4
,
 
v
a
r
s
:
 
{
 
b
a
c
k
:
 
d
q
[
d
q
.
l
e
n
g
t
h
 
-
 
1
]
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
p
o
p
B
a
c
k
(
)
,
 
r
e
m
o
v
e
 
$
{
d
q
[
d
q
.
l
e
n
g
t
h
 
-
 
1
]
.
v
a
l
u
e
}
`
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
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
 
d
q
.
p
o
p
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
 
4
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
 
d
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
.
v
a
l
u
e
}
 
f
r
o
m
 
r
e
a
r
`
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
 
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
M
o
n
o
t
o
n
i
c
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
,
 
k
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


 
 
t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
a
t
c
h
"
;


 
 
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


 
 
c
o
n
s
t
 
d
q
I
d
x
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


 
 
c
o
n
s
t
 
r
e
s
u
l
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


 
 
c
o
n
s
t
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
k
 
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
1
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
k
,
 
n
)
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
 
0
,
 
v
a
r
s
:
 
{
 
n
,
 
k
 
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
F
i
n
d
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
m
a
x
,
 
w
i
n
d
o
w
 
s
i
z
e
 
k
 
=
 
$
{
k
}
`
,
 
d
e
q
u
e
:
 
[
]
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
[
.
.
.
s
t
a
t
e
s
]
,
 
i
:
 
-
1
,
 
r
e
s
u
l
t
:
 
[
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
 
1
,
 
v
a
r
s
:
 
{
 
d
q
:
 
"
[
]
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
I
n
i
t
i
a
l
i
z
e
 
e
m
p
t
y
 
d
e
q
u
e
 
o
f
 
i
n
d
i
c
e
s
"
,
 
d
e
q
u
e
:
 
[
]
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
[
.
.
.
s
t
a
t
e
s
]
,
 
i
:
 
-
1
,
 
r
e
s
u
l
t
:
 
[
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
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
l
o
 
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
0
,
 
i
 
-
 
k
 
+
 
1
)
;


 
 
 
 
c
o
n
s
t
 
h
i
 
=
 
i
;


 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
s
_
i
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
j
)
 
=
>
 
(
j
 
>
=
 
l
o
 
&
&
 
j
 
<
=
 
h
i
)
 
?
 
"
w
i
n
d
o
w
"
 
:
 
j
 
<
 
l
o
 
?
 
"
d
o
n
e
"
 
:
 
"
d
e
f
a
u
l
t
"
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
 
v
a
l
u
e
:
 
a
r
r
[
i
]
 
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
,
 
c
o
n
s
i
d
e
r
 
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
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;




 
 
 
 
i
f
 
(
d
q
I
d
x
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
d
q
I
d
x
[
0
]
 
<
=
 
i
 
-
 
k
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
 
"
d
q
.
f
r
o
n
t
"
:
 
d
q
I
d
x
[
0
]
,
 
t
h
r
e
s
h
o
l
d
:
 
i
 
-
 
k
 
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
F
r
o
n
t
 
i
n
d
e
x
 
$
{
d
q
I
d
x
[
0
]
}
 
i
s
 
o
u
t
 
o
f
 
w
i
n
d
o
w
,
 
d
r
o
p
 
i
t
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
,
 
j
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
,
 
f
l
a
s
h
:
 
j
 
=
=
=
 
0
 
?
 
"
p
o
p
-
v
i
o
l
a
t
e
"
 
a
s
 
c
o
n
s
t
 
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
 
 
d
q
I
d
x
.
s
h
i
f
t
(
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
 
5
,
 
v
a
r
s
:
 
{
 
"
d
q
.
s
i
z
e
"
:
 
d
q
I
d
x
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
F
r
o
n
t
 
r
e
m
o
v
e
d
"
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
}


 
 
 
 
w
h
i
l
e
 
(
d
q
I
d
x
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
a
r
r
[
d
q
I
d
x
[
d
q
I
d
x
.
l
e
n
g
t
h
 
-
 
1
]
]
 
<
 
a
r
r
[
i
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
a
i
l
 
=
 
d
q
I
d
x
[
d
q
I
d
x
.
l
e
n
g
t
h
 
-
 
1
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
 
6
,
 
v
a
r
s
:
 
{
 
"
d
q
.
b
a
c
k
"
:
 
t
a
i
l
,
 
"
a
r
r
[
b
a
c
k
]
"
:
 
a
r
r
[
t
a
i
l
]
,
 
c
u
r
r
e
n
t
:
 
a
r
r
[
i
]
 
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
a
r
r
[
$
{
t
a
i
l
}
]
=
$
{
a
r
r
[
t
a
i
l
]
}
 
<
 
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
,
 
v
i
o
l
a
t
e
s
 
i
n
v
a
r
i
a
n
t
,
 
p
o
p
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
,
 
j
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
,
 
f
l
a
s
h
:
 
j
 
=
=
=
 
d
q
I
d
x
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
p
o
p
-
v
i
o
l
a
t
e
"
 
a
s
 
c
o
n
s
t
 
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
 
 
d
q
I
d
x
.
p
o
p
(
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
 
7
,
 
v
a
r
s
:
 
{
 
"
d
q
.
s
i
z
e
"
:
 
d
q
I
d
x
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
P
o
p
p
e
d
"
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
}


 
 
 
 
d
q
I
d
x
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
 
8
,
 
v
a
r
s
:
 
{
 
p
u
s
h
e
d
:
 
i
,
 
"
a
r
r
[
i
]
"
:
 
a
r
r
[
i
]
 
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
p
u
s
h
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
p
u
s
h
B
a
c
k
(
$
{
i
}
)
,
 
n
e
w
 
v
a
l
u
e
 
$
{
a
r
r
[
i
]
}
 
j
o
i
n
s
 
d
e
q
u
e
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
,
 
j
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
,
 
f
l
a
s
h
:
 
j
 
=
=
=
 
d
q
I
d
x
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
e
n
t
e
r
"
 
a
s
 
c
o
n
s
t
 
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
_
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;




 
 
 
 
i
f
 
(
i
 
>
=
 
k
 
-
 
1
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
a
x
V
a
l
 
=
 
a
r
r
[
d
q
I
d
x
[
0
]
]
;


 
 
 
 
 
 
r
e
s
u
l
t
.
p
u
s
h
(
m
a
x
V
a
l
)
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
s
M
a
x
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
j
)
 
=
>
 
j
 
=
=
=
 
d
q
I
d
x
[
0
]
 
?
 
"
m
a
t
c
h
"
 
:
 
(
j
 
>
=
 
l
o
 
&
&
 
j
 
<
=
 
h
i
)
 
?
 
"
w
i
n
d
o
w
"
 
:
 
j
 
<
 
l
o
 
?
 
"
d
o
n
e
"
 
:
 
"
d
e
f
a
u
l
t
"
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
 
9
,
 
v
a
r
s
:
 
{
 
"
w
i
n
d
o
w
"
:
 
`
[
$
{
l
o
}
.
.
$
{
h
i
}
]
`
,
 
m
a
x
:
 
m
a
x
V
a
l
 
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
m
a
x
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
i
n
d
o
w
 
[
$
{
l
o
}
.
.
$
{
h
i
}
]
:
 
m
a
x
 
=
 
a
r
r
[
$
{
d
q
I
d
x
[
0
]
}
]
 
=
 
$
{
m
a
x
V
a
l
}
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
s
t
s
M
a
x
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
w
i
n
d
o
w
H
i
:
 
h
i
,
 
i
,
 
m
a
x
A
t
S
t
e
p
:
 
d
q
I
d
x
[
0
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
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
 
1
0
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
`
[
$
{
r
e
s
u
l
t
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
,
 
$
{
r
e
s
u
l
t
.
l
e
n
g
t
h
}
 
w
i
n
d
o
w
 
m
a
x
i
m
a
`
,
 
d
e
q
u
e
:
 
d
q
I
d
x
.
m
a
p
(
(
i
d
x
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
a
r
r
[
i
d
x
]
,
 
i
d
x
 
}
)
)
,
 
a
r
r
a
y
:
 
a
r
r
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
_
,
 
j
)
 
=
>
 
j
 
<
=
 
n
 
-
 
k
 
?
 
"
d
o
n
e
"
 
:
 
"
w
i
n
d
o
w
"
)
,
 
i
:
 
n
 
-
 
1
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
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
 
 
D
e
q
u
e
 
r
o
w
 
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
 
D
e
q
u
e
R
o
w
(
{
 
i
t
e
m
s
,
 
s
h
o
w
I
d
x
 
}
:
 
{
 
i
t
e
m
s
:
 
{
 
v
a
l
u
e
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
x
?
:
 
n
u
m
b
e
r
;
 
f
l
a
s
h
?
:
 
"
e
n
t
e
r
"
 
|
 
"
p
o
p
-
v
i
o
l
a
t
e
"
 
}
[
]
;
 
s
h
o
w
I
d
x
?
:
 
b
o
o
l
e
a
n
 
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
 
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
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
 
p
-
3
 
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
 
m
i
n
-
h
-
1
6
 
m
i
n
-
w
-
7
2
 
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
6
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
i
t
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
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
B
a
c
k
 
=
 
i
 
=
=
=
 
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
 
-
 
1
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
i
t
.
f
l
a
s
h
 
=
=
=
 
"
e
n
t
e
r
"
 
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
 
i
t
.
f
l
a
s
h
 
=
=
=
 
"
p
o
p
-
v
i
o
l
a
t
e
"
 
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
i
n
-
h
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
F
r
o
n
t
 
&
&
 
i
s
B
a
c
k
 
?
 
"
f
r
o
n
t
/
b
a
c
k
"
 
:
 
i
s
F
r
o
n
t
 
?
 
"
f
r
o
n
t
"
 
:
 
i
s
B
a
c
k
 
?
 
"
b
a
c
k
"
 
:
 
"
"
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
 
t
e
x
t
-
w
h
i
t
e
 
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
 
b
g
,
 
b
o
x
S
h
a
d
o
w
:
 
`
0
 
0
 
0
 
2
p
x
 
$
{
b
g
}
3
3
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
I
d
x
 
&
&
 
i
t
.
i
d
x
 
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
"
>
i
=
{
i
t
.
i
d
x
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
 
 
A
r
r
a
y
 
b
a
r
s
 
f
o
r
 
m
o
n
o
t
o
n
i
c
 
m
o
d
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




/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
u
n
u
s
e
d
-
v
a
r
s


f
u
n
c
t
i
o
n
 
A
r
r
a
y
B
a
r
s
S
i
m
p
l
e
(
{
 
v
a
l
u
e
s
,
 
s
t
a
t
e
s
,
 
w
i
n
d
o
w
L
o
:
 
_
w
i
n
d
o
w
L
o
,
 
w
i
n
d
o
w
H
i
:
 
_
w
i
n
d
o
w
H
i
,
 
i
C
u
r
 
}
:
 
{


 
 
v
a
l
u
e
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
;


 
 
s
t
a
t
e
s
:
 
(
"
d
e
f
a
u
l
t
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
a
t
c
h
"
)
[
]
;


 
 
w
i
n
d
o
w
L
o
?
:
 
n
u
m
b
e
r
;


 
 
w
i
n
d
o
w
H
i
?
:
 
n
u
m
b
e
r
;


 
 
i
C
u
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


}
)
 
{


 
 
c
o
n
s
t
 
m
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
v
a
l
u
e
s
.
m
a
p
(
M
a
t
h
.
a
b
s
)
,
 
1
)
;


 
 
c
o
n
s
t
 
H
 
=
 
1
4
0
;


 
 
c
o
n
s
t
 
B
A
R
_
W
 
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
3
6
,
 
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
4
8
0
 
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
v
a
l
u
e
s
.
l
e
n
g
t
h
,
 
1
)
)
)
;


 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
*
 
(
B
A
R
_
W
 
+
 
4
)
 
+
 
2
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
M
a
t
h
.
m
a
x
(
3
6
0
,
 
w
i
d
t
h
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
 
+
 
3
0
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
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
 
b
a
r
H
 
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
4
,
 
M
a
t
h
.
r
o
u
n
d
(
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
v
)
 
/
 
m
a
x
)
 
*
 
(
H
 
-
 
2
0
)
)
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
1
0
 
+
 
i
 
*
 
(
B
A
R
_
W
 
+
 
4
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
H
 
-
 
b
a
r
H
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
s
t
 
=
=
=
 
"
m
a
t
c
h
"
 
?
 
"
#
a
3
e
6
3
5
"
 
:
 
s
t
 
=
=
=
 
"
w
i
n
d
o
w
"
 
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
 
s
t
 
=
=
=
 
"
d
o
n
e
"
 
?
 
"
#
7
8
7
1
6
c
"
 
:
 
"
#
d
6
d
3
d
1
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
 
=
 
i
C
u
r
 
=
=
=
 
i
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
r
e
c
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
}
 
w
i
d
t
h
=
{
B
A
R
_
W
}
 
h
e
i
g
h
t
=
{
b
a
r
H
}
 
r
x
=
{
3
}
 
f
i
l
l
=
{
f
i
l
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
 
&
&
 
<
r
e
c
t
 
x
=
{
x
 
-
 
1
}
 
y
=
{
y
 
-
 
2
}
 
w
i
d
t
h
=
{
B
A
R
_
W
 
+
 
2
}
 
h
e
i
g
h
t
=
{
b
a
r
H
 
+
 
4
}
 
r
x
=
{
3
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
"
#
a
3
e
6
3
5
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
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
B
A
R
_
W
 
/
 
2
}
 
y
=
{
H
 
+
 
1
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
{
v
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
d
e
q
u
e
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
P
B
1
,
 
P
B
2
,
 
P
F
3
,
 
P
B
4
,
 
R
F
,
 
R
B
"
)
;


 
 
c
o
n
s
t
 
[
a
r
r
S
t
r
,
 
s
e
t
A
r
r
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
1
,
 
3
,
 
-
1
,
 
-
3
,
 
5
,
 
3
,
 
6
,
 
7
"
)
;


 
 
c
o
n
s
t
 
[
k
,
 
s
e
t
K
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
3
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


 
 
 
 
c
o
n
s
t
 
a
r
r
 
=
 
p
a
r
s
e
L
i
s
t
(
a
r
r
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
d
e
q
u
e
"
 
?
 
b
u
i
l
d
D
e
q
u
e
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
M
o
n
o
t
o
n
i
c
(
a
r
r
,
 
k
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
 
a
r
r
S
t
r
,
 
k
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
d
e
q
u
e
"
 
?
 
P
S
E
U
D
O
_
D
E
Q
U
E
 
:
 
P
S
E
U
D
O
_
M
O
N
O
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
d
e
q
u
e
"
 
?
 
"
D
e
q
u
e
,
 
D
o
u
b
l
e
-
E
n
d
e
d
 
Q
u
e
u
e
"
 
:
 
"
M
o
n
o
t
o
n
i
c
 
D
e
q
u
e
,
 
S
l
i
d
i
n
g
 
W
i
n
d
o
w
 
M
a
x
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
d
e
q
u
e
"
,
 
"
m
o
n
o
t
o
n
i
c
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
"
>
{
m
 
=
=
=
 
"
d
e
q
u
e
"
 
?
 
"
D
e
q
u
e
 
O
p
s
"
 
:
 
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
 
M
a
x
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


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
d
e
q
u
e
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
B
1
,
 
P
F
2
,
 
R
B
,
 
P
F
3
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
P
F
<
n
>
=
p
u
s
h
F
r
o
n
t
,
 
P
B
<
n
>
=
p
u
s
h
B
a
c
k
,
 
R
F
=
p
o
p
F
r
o
n
t
,
 
R
B
=
p
o
p
B
a
c
k
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
P
B
1
,
 
P
B
2
,
 
P
F
3
,
 
P
B
4
,
 
R
F
,
 
R
B
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
S
t
a
c
k
-
l
i
k
e
"
,
 
v
a
l
u
e
:
 
"
P
B
1
,
 
P
B
2
,
 
P
B
3
,
 
R
B
,
 
R
B
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
Q
u
e
u
e
-
l
i
k
e
"
,
 
v
a
l
u
e
:
 
"
P
B
1
,
 
P
B
2
,
 
P
B
3
,
 
R
F
,
 
R
F
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
 
c
h
o
i
c
e
s
:
 
D
O
p
[
]
 
=
 
[
"
P
F
"
,
 
"
P
B
"
,
 
"
R
F
"
,
 
"
R
B
"
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
c
h
o
i
c
e
s
[
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
 
c
h
o
i
c
e
s
.
l
e
n
g
t
h
)
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
c
 
=
=
=
 
"
R
F
"
 
|
|
 
c
 
=
=
=
 
"
R
B
"
 
?
 
c
 
:
 
`
$
{
c
}
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
 
2
0
)
 
+
 
1
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
A
r
r
a
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
a
r
r
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
 
1
,
 
3
,
 
-
1
,
 
-
3
,
 
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
I
n
t
e
g
e
r
 
a
r
r
a
y
 
f
o
r
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
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
C
l
a
s
s
i
c
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
 
3
,
 
-
1
,
 
-
3
,
 
5
,
 
3
,
 
6
,
 
7
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
A
s
c
e
n
d
i
n
g
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
 
2
,
 
3
,
 
4
,
 
5
,
 
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
D
e
s
c
e
n
d
i
n
g
"
,
 
v
a
l
u
e
:
 
"
9
,
 
7
,
 
5
,
 
3
,
 
1
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
i
t
h
 
d
u
p
e
s
"
,
 
v
a
l
u
e
:
 
"
4
,
 
4
,
 
2
,
 
8
,
 
8
,
 
1
,
 
5
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
A
r
r
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
 
7
 
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
 
3
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
A
r
r
S
t
r
(
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
 
2
0
)
 
-
 
5
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
i
n
d
o
w
 
s
i
z
e
 
k
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
k
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
K
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
p
a
r
s
e
L
i
s
t
(
a
r
r
S
t
r
)
.
l
e
n
g
t
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
 
w
-
f
u
l
l
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
m
o
n
o
t
o
n
i
c
"
 
&
&
 
f
r
a
m
e
?
.
a
r
r
a
y
 
&
&
 
f
r
a
m
e
.
s
t
a
t
e
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s
S
i
m
p
l
e


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
r
a
m
e
.
a
r
r
a
y
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
s
t
a
t
e
s
 
a
s
 
(
"
d
e
f
a
u
l
t
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
a
t
c
h
"
)
[
]
}


 
 
 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
L
o
=
{
f
r
a
m
e
.
w
i
n
d
o
w
L
o
}


 
 
 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
H
i
=
{
f
r
a
m
e
.
w
i
n
d
o
w
H
i
}


 
 
 
 
 
 
 
 
 
 
 
 
i
C
u
r
=
{
f
r
a
m
e
.
i
 
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
i
 
>
=
 
0
 
?
 
f
r
a
m
e
.
i
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
f
u
l
l
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
 
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
D
e
q
u
e
 
(
f
r
o
n
t
 
{
"
←
"
}
 
{
"
→
"
}
 
b
a
c
k
)
{
m
o
d
e
 
=
=
=
 
"
m
o
n
o
t
o
n
i
c
"
 
?
 
"
,
 
i
n
d
i
c
e
s
 
o
f
 
c
a
n
d
i
d
a
t
e
s
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
D
e
q
u
e
R
o
w
 
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
d
e
q
u
e
 
?
?
 
[
]
}
 
s
h
o
w
I
d
x
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
m
o
n
o
t
o
n
i
c
"
}
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
m
o
n
o
t
o
n
i
c
"
 
&
&
 
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
 
&
&
 
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
.
l
e
n
g
t
h
 
>
 
0
 
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
l
i
m
e
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
W
i
n
d
o
w
 
m
a
x
i
m
a
 
s
o
 
f
a
r
:
 
[
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
D
e
q
u
e
 
=
 
s
t
a
c
k
 
+
 
q
u
e
u
e
"
,
 
b
:
 
"
A
 
d
o
u
b
l
e
-
e
n
d
e
d
 
q
u
e
u
e
 
s
u
p
p
o
r
t
s
 
f
o
u
r
 
O
(
1
)
 
o
p
s
:
 
p
u
s
h
F
r
o
n
t
,
 
p
u
s
h
B
a
c
k
,
 
p
o
p
F
r
o
n
t
,
 
p
o
p
B
a
c
k
.
 
U
s
e
 
o
n
l
y
 
p
u
s
h
B
a
c
k
+
p
o
p
F
r
o
n
t
 
a
n
d
 
y
o
u
 
h
a
v
e
 
a
 
q
u
e
u
e
.
 
U
s
e
 
o
n
l
y
 
p
u
s
h
B
a
c
k
+
p
o
p
B
a
c
k
 
a
n
d
 
y
o
u
 
h
a
v
e
 
a
 
s
t
a
c
k
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
M
o
n
o
t
o
n
i
c
 
d
e
q
u
e
"
,
 
b
:
 
"
A
 
d
e
q
u
e
 
w
h
o
s
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
 
k
e
p
t
 
s
t
r
i
c
t
l
y
 
i
n
c
r
e
a
s
i
n
g
 
(
o
r
 
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
)
 
f
r
o
m
 
f
r
o
n
t
 
t
o
 
b
a
c
k
.
 
W
h
e
n
e
v
e
r
 
a
 
n
e
w
 
v
a
l
u
e
 
v
i
o
l
a
t
e
s
 
t
h
e
 
o
r
d
e
r
,
 
p
o
p
 
f
r
o
m
 
t
h
e
 
b
a
c
k
 
u
n
t
i
l
 
t
h
e
 
o
r
d
e
r
 
i
s
 
r
e
s
t
o
r
e
d
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
S
l
i
d
i
n
g
-
w
i
n
d
o
w
 
m
a
x
 
i
n
 
O
(
n
)
"
,
 
b
:
 
"
T
h
e
 
f
r
o
n
t
 
o
f
 
a
 
m
a
x
-
m
o
n
o
t
o
n
i
c
 
d
e
q
u
e
 
i
s
 
a
l
w
a
y
s
 
t
h
e
 
m
a
x
 
o
f
 
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
 
w
i
n
d
o
w
.
 
E
a
c
h
 
e
l
e
m
e
n
t
 
e
n
t
e
r
s
 
a
n
d
 
l
e
a
v
e
s
 
t
h
e
 
d
e
q
u
e
 
o
n
c
e
,
 
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
 
O
(
n
)
,
 
n
o
t
 
O
(
n
k
)
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
P
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
 
v
s
 
d
e
q
u
e
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
 
f
i
n
d
 
a
 
m
a
x
.
 
B
u
t
 
h
e
a
p
 
i
n
s
e
r
t
/
r
e
m
o
v
e
 
i
s
 
O
(
l
o
g
 
n
)
;
 
m
o
n
o
t
o
n
i
c
 
d
e
q
u
e
 
i
s
 
O
(
1
)
 
a
m
o
r
t
i
z
e
d
 
w
h
e
n
 
t
h
e
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
 
i
s
 
a
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
.
 
P
i
c
k
 
t
h
e
 
s
t
r
u
c
t
u
r
e
 
t
h
a
t
 
m
a
t
c
h
e
s
 
t
h
e
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
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
w
h
y
 
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
 
m
a
t
t
e
r
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
T
h
e
 
f
r
o
n
t
 
a
l
w
a
y
s
 
h
o
l
d
s
 
t
h
e
 
w
i
n
d
o
w
'
s
 
m
a
x
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


 
 
 
 
 
 
 
 
 
 
K
e
e
p
i
n
g
 
t
h
e
 
d
e
q
u
e
 
s
o
r
t
e
d
 
b
y
 
v
a
l
u
e
 
(
w
i
t
h
 
s
m
a
l
l
e
r
 
v
a
l
u
e
s
 
t
h
r
o
w
n
 
a
w
a
y
 
w
h
e
n
 
a
 
b
i
g
g
e
r
 
o
n
e


 
 
 
 
 
 
 
 
 
 
a
r
r
i
v
e
s
)
 
m
e
a
n
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
s
 
t
h
e
 
m
a
x
.
 
K
e
e
p
i
n
g
 
i
n
d
i
c
e
s
 
(
n
o
t
 
v
a
l
u
e
s
)
 
l
e
t
s
 
u
s
 
a
l
s
o
 
d
e
t
e
c
t
 
w
h
e
n


 
 
 
 
 
 
 
 
 
 
t
h
e
 
m
a
x
 
h
a
s
 
s
l
i
d
 
o
u
t
 
o
f
 
t
h
e
 
w
i
n
d
o
w
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
F
o
r
 
a
r
r
 
=
 
[
4
,
3
,
2
,
1
]
 
a
n
d
 
k
=
2
,
 
t
h
e
 
w
i
n
d
o
w
 
m
a
x
i
m
a
 
a
r
e
?
"
,
 
a
:
 
"
[
4
,
 
3
,
 
2
]
"
 
}
,


 
 
 
 
{
 
q
:
 
"
F
o
r
 
a
r
r
 
=
 
[
1
,
2
,
3
,
4
]
 
a
n
d
 
k
=
2
,
 
t
h
e
 
w
i
n
d
o
w
 
m
a
x
i
m
a
 
a
r
e
?
"
,
 
a
:
 
"
[
2
,
 
3
,
 
4
]
"
 
}
,


 
 
 
 
{
 
q
:
 
"
E
a
c
h
 
e
l
e
m
e
n
t
 
i
s
 
p
u
s
h
e
d
 
a
t
 
m
o
s
t
 
_
_
_
 
a
n
d
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
_
_
_
 
i
n
 
t
h
e
 
m
o
n
o
t
o
n
i
c
 
d
e
q
u
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
,
 
a
:
 
"
1
 
t
i
m
e
 
e
a
c
h
,
 
t
o
t
a
l
 
w
o
r
k
 
O
(
n
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
i
c
h
 
f
o
u
r
 
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
 
d
e
f
i
n
e
 
a
 
d
e
q
u
e
?
"
,
 
a
:
 
"
p
u
s
h
F
r
o
n
t
,
 
p
u
s
h
B
a
c
k
,
 
p
o
p
F
r
o
n
t
,
 
p
o
p
B
a
c
k
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
W
o
r
k
 
o
n
 
p
a
p
e
r
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
6
4
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
A
m
o
r
t
i
z
e
d
 
O
(
n
)
,
 
t
h
e
 
a
c
c
o
u
n
t
i
n
g
 
a
r
g
u
m
e
n
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


 
 
 
 
 
 
 
 
 
 
A
l
t
h
o
u
g
h
 
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
 
m
a
y
 
p
o
p
 
m
a
n
y
 
e
l
e
m
e
n
t
s
,
 
e
a
c
h
 
e
l
e
m
e
n
t
 
i
s
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
 
a
c
r
o
s
s


 
 
 
 
 
 
 
 
 
 
t
h
e
 
e
n
t
i
r
e
 
r
u
n
.
 
S
u
m
 
t
o
t
a
l
 
p
o
p
s
 
≤
 
n
.
 
P
u
s
h
e
s
 
a
r
e
 
a
t
 
m
o
s
t
 
n
.
 
T
o
t
a
l
 
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
 
≤
 
2
n
 
→
 
O
(
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
W
h
e
r
e
 
d
e
q
u
e
s
 
a
p
p
e
a
r
 
i
n
 
p
r
a
c
t
i
c
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
P
y
t
h
o
n
'
s
 
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
"
>
c
o
l
l
e
c
t
i
o
n
s
.
d
e
q
u
e
<
/
c
o
d
e
>
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
J
a
v
a
'
s
 
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
"
>
A
r
r
a
y
D
e
q
u
e
<
/
c
o
d
e
>
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
o
r
k
-
s
t
e
a
l
i
n
g
 
r
u
n
q
u
e
u
e
s
 
(
u
s
e
d
 
b
y
 
G
o
/
J
a
v
a
 
f
o
r
k
-
j
o
i
n
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
0
-
1
 
B
F
S
 
i
n
 
g
r
a
p
h
s
 
(
p
u
s
h
F
r
o
n
t
 
f
o
r
 
w
e
i
g
h
t
 
0
,
 
p
u
s
h
B
a
c
k
 
f
o
r
 
w
e
i
g
h
t
 
1
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
S
l
i
d
i
n
g
 
w
i
n
d
o
w
 
m
i
n
/
m
a
x
,
 
f
i
r
s
t
-
n
e
g
a
t
i
v
e
-
i
n
-
e
v
e
r
y
-
w
i
n
d
o
w
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
D
e
q
u
e
S
p
e
c
i
a
l
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
p
e
r
a
t
i
o
n
s
 
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
 
f
o
r
 
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
 
t
o
 
q
u
a
l
i
f
y
 
a
s
 
a
 
d
e
q
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
O
n
l
y
 
p
u
s
h
B
a
c
k
 
a
n
d
 
p
o
p
F
r
o
n
t
"
,


 
 
 
 
 
 
 
 
"
p
u
s
h
F
r
o
n
t
,
 
p
u
s
h
B
a
c
k
,
 
p
o
p
F
r
o
n
t
,
 
p
o
p
B
a
c
k
"
,


 
 
 
 
 
 
 
 
"
p
u
s
h
 
a
n
d
 
p
o
p
 
a
t
 
o
n
e
 
e
n
d
"
,


 
 
 
 
 
 
 
 
"
I
n
s
e
r
t
 
a
t
 
a
n
y
 
p
o
s
i
t
i
o
n
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
e
q
u
e
 
i
s
 
d
o
u
b
l
e
-
e
n
d
e
d
:
 
a
l
l
 
f
o
u
r
 
i
n
s
e
r
t
/
r
e
m
o
v
e
-
a
t
-
b
o
t
h
-
e
n
d
s
 
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
.
 
I
n
s
e
r
t
 
a
t
 
a
r
b
i
t
r
a
r
y
 
p
o
s
i
t
i
o
n
 
i
s
 
N
O
T
 
a
 
d
e
q
u
e
 
r
e
q
u
i
r
e
m
e
n
t
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
 
t
h
e
 
m
o
n
o
t
o
n
i
c
 
d
e
q
u
e
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
-
m
a
x
i
m
u
m
 
a
l
g
o
r
i
t
h
m
,
 
w
h
a
t
 
d
o
e
s
 
t
h
e
 
d
e
q
u
e
 
s
t
o
r
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
V
a
l
u
e
s
"
,
 
"
I
n
d
i
c
e
s
 
i
n
 
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
 
o
r
d
e
r
 
o
f
 
v
a
l
u
e
"
,
 
"
I
n
d
i
c
e
s
 
i
n
 
i
n
c
r
e
a
s
i
n
g
 
o
r
d
e
r
 
o
f
 
v
a
l
u
e
"
,
 
"
W
i
n
d
o
w
 
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
I
n
d
i
c
e
s
 
a
r
e
 
s
t
o
r
e
d
 
s
o
 
w
e
 
c
a
n
 
d
e
t
e
c
t
 
w
h
e
n
 
t
h
e
 
f
r
o
n
t
 
h
a
s
 
s
l
i
d
 
o
u
t
 
o
f
 
t
h
e
 
w
i
n
d
o
w
.
 
T
h
e
y
 
a
r
e
 
k
e
p
t
 
i
n
 
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
 
o
r
d
e
r
 
o
f
 
t
h
e
 
v
a
l
u
e
s
 
t
h
e
y
 
r
e
f
e
r
 
t
o
,
 
t
h
e
 
f
r
o
n
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
h
e
 
m
a
x
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
 
t
h
e
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
-
m
a
x
 
a
l
g
o
r
i
t
h
m
 
u
s
i
n
g
 
a
 
m
o
n
o
t
o
n
i
c
 
d
e
q
u
e
 
O
(
n
)
,
 
n
o
t
 
O
(
n
k
)
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
T
h
e
 
d
e
q
u
e
 
h
a
s
 
c
a
p
a
c
i
t
y
 
k
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
a
r
r
a
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
 
p
u
s
h
e
d
 
a
n
d
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
 
t
o
t
a
l
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
 
s
k
i
p
s
 
k
-
1
 
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
M
o
d
e
r
n
 
C
P
U
s
 
v
e
c
t
o
r
i
z
e
 
i
t
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
m
o
r
t
i
z
e
d
 
a
n
a
l
y
s
i
s
:
 
t
o
t
a
l
 
p
u
s
h
e
s
 
≤
 
n
 
a
n
d
 
t
o
t
a
l
 
p
o
p
s
 
≤
 
n
,
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
k
.
 
L
i
n
e
a
r
 
t
i
m
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
F
o
r
 
a
r
r
 
=
 
[
5
,
 
3
,
 
7
,
 
1
,
 
2
]
 
a
n
d
 
k
 
=
 
3
,
 
w
h
a
t
 
i
s
 
t
h
e
 
f
i
r
s
t
 
w
i
n
d
o
w
'
s
 
m
a
x
i
m
u
m
 
u
s
i
n
g
 
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
5
"
,
 
"
7
"
,
 
"
3
"
,
 
"
2
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
r
s
t
 
w
i
n
d
o
w
 
i
s
 
[
5
,
 
3
,
 
7
]
;
 
m
a
x
 
i
s
 
7
.
 
T
h
e
 
d
e
q
u
e
 
a
f
t
e
r
 
p
r
o
c
e
s
s
i
n
g
 
i
=
2
 
h
o
l
d
s
 
j
u
s
t
 
[
i
n
d
e
x
 
2
]
 
b
e
c
a
u
s
e
 
5
 
a
n
d
 
3
 
w
e
r
e
 
p
o
p
p
e
d
 
w
h
e
n
 
7
 
a
r
r
i
v
e
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
D
e
q
u
e
s
 
&
 
S
p
e
c
i
a
l
 
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
5
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
S
l
i
d
i
n
g
-
w
i
n
d
o
w
 
p
r
o
b
l
e
m
s
,
 
m
o
n
o
t
o
n
i
c
-
d
e
q
u
e
 
p
a
t
t
e
r
n
s
 
a
p
p
e
a
r
 
i
n
 
F
A
A
N
G
 
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
H
a
s
h
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


