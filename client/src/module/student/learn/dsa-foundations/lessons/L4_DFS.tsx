
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
g
r
a
p
h
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
 
N
o
d
e
C
o
l
o
r
 
=
 
"
W
"
 
|
 
"
G
"
 
|
 
"
B
"
;


t
y
p
e
 
N
o
d
e
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
a
c
t
i
v
e
"
 
|
 
"
d
o
n
e
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
F
S
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


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
n
o
d
e
M
e
t
a
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
>
>
;


 
 
e
d
g
e
L
a
b
e
l
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
>
;


 
 
e
d
g
e
T
r
e
e
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
e
d
g
e
B
a
c
k
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
s
t
a
c
k
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


 
 
f
l
a
s
h
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
a
r
s
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
 
p
a
r
s
e
E
d
g
e
L
i
s
t
(
i
n
p
u
t
:
 
s
t
r
i
n
g
)
:
 
{
 
n
o
d
e
I
d
s
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
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
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
r
e
c
t
e
d
:
 
b
o
o
l
e
a
n
 
}
[
]
 
}
 
|
 
n
u
l
l
 
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
 
i
n
p
u
t
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
;


 
 
i
f
 
(
t
o
k
e
n
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
)
 
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


 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
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
r
e
c
t
e
d
:
 
b
o
o
l
e
a
n
 
}
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
 
i
d
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
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
 
t
o
k
 
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
 
d
i
r
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
>
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
$
/
)
;


 
 
 
 
c
o
n
s
t
 
u
n
d
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
-
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
$
/
)
;


 
 
 
 
i
f
 
(
d
i
r
)
 
{
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
d
i
r
[
1
]
,
 
t
o
:
 
d
i
r
[
2
]
,
 
d
i
r
e
c
t
e
d
:
 
t
r
u
e
 
}
)
;
 
i
d
s
.
a
d
d
(
d
i
r
[
1
]
)
;
 
i
d
s
.
a
d
d
(
d
i
r
[
2
]
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
u
n
d
)
 
{
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
u
n
d
[
1
]
,
 
t
o
:
 
u
n
d
[
2
]
,
 
d
i
r
e
c
t
e
d
:
 
f
a
l
s
e
 
}
)
;
 
i
d
s
.
a
d
d
(
u
n
d
[
1
]
)
;
 
i
d
s
.
a
d
d
(
u
n
d
[
2
]
)
;
 
}


 
 
 
 
e
l
s
e
 
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


 
 
r
e
t
u
r
n
 
{
 
n
o
d
e
I
d
s
:
 
[
.
.
.
i
d
s
]
.
s
o
r
t
(
)
,
 
e
d
g
e
s
 
}
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
:
 
s
t
r
i
n
g
[
]
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
)
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
 
}
>
 
{


 
 
c
o
n
s
t
 
o
u
t
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
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
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
d
s
.
f
o
r
E
a
c
h
(
(
i
d
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
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
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
 
n
)
 
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


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
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
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
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
n
g
)
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
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
F
S
 
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
 
P
S
E
U
D
O
 
=
 
[


 
 
"
D
F
S
(
G
)
:
"
,


 
 
"
 
 
t
i
m
e
 
←
 
0
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
 
i
n
 
V
:
 
c
o
l
o
r
[
v
]
 
←
 
W
H
I
T
E
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
s
 
i
n
 
V
:
"
,


 
 
"
 
 
 
 
i
f
 
c
o
l
o
r
[
s
]
 
=
 
W
H
I
T
E
:
 
D
F
S
-
V
i
s
i
t
(
s
)
"
,


 
 
"
D
F
S
-
V
i
s
i
t
(
u
)
:
"
,


 
 
"
 
 
c
o
l
o
r
[
u
]
 
←
 
G
R
A
Y
;
 
d
[
u
]
 
←
 
+
+
t
i
m
e
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
v
 
o
f
 
u
:
"
,


 
 
"
 
 
 
 
i
f
 
c
o
l
o
r
[
v
]
 
=
 
W
H
I
T
E
:
 
 
 
 
/
/
 
T
r
e
e
 
e
d
g
e
"
,


 
 
"
 
 
 
 
 
 
D
F
S
-
V
i
s
i
t
(
v
)
"
,


 
 
"
 
 
 
 
e
l
i
f
 
c
o
l
o
r
[
v
]
 
=
 
G
R
A
Y
:
 
 
 
/
/
 
B
a
c
k
 
e
d
g
e
"
,


 
 
"
 
 
 
 
 
 
r
e
c
o
r
d
 
b
a
c
k
 
e
d
g
e
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
F
o
r
w
a
r
d
 
o
r
 
C
r
o
s
s
"
,


 
 
"
 
 
 
 
 
 
r
e
c
o
r
d
 
F
/
C
 
e
d
g
e
"
,


 
 
"
 
 
c
o
l
o
r
[
u
]
 
←
 
B
L
A
C
K
;
 
f
[
u
]
 
←
 
+
+
t
i
m
e
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
 
b
u
i
l
d
D
F
S
F
r
a
m
e
s
(


 
 
i
d
s
:
 
s
t
r
i
n
g
[
]
,


 
 
r
a
w
E
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
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
r
e
c
t
e
d
:
 
b
o
o
l
e
a
n
 
}
[
]
,


 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
,


)
:
 
D
F
S
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
 
D
F
S
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


 
 
i
f
 
(
!
i
d
s
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
s
o
u
r
c
e
)
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
o
u
r
c
e
 
'
$
{
s
o
u
r
c
e
}
'
 
n
o
t
 
i
n
 
g
r
a
p
h
`
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
n
o
d
e
M
e
t
a
:
 
{
}
,
 
e
d
g
e
L
a
b
e
l
s
:
 
{
}
,
 
e
d
g
e
T
r
e
e
:
 
n
e
w
 
S
e
t
(
)
,
 
e
d
g
e
B
a
c
k
:
 
n
e
w
 
S
e
t
(
)
,
 
s
t
a
c
k
:
 
[
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




 
 
c
o
n
s
t
 
a
d
j
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
 
{
 
t
o
:
 
s
t
r
i
n
g
;
 
k
e
y
:
 
s
t
r
i
n
g
 
}
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
]
)
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
 
e
 
o
f
 
r
a
w
E
d
g
e
s
)
 
{


 
 
 
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
t
o
,
 
k
e
y
:
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
 
}
)
;


 
 
 
 
i
f
 
(
!
e
.
d
i
r
e
c
t
e
d
)
 
a
d
j
[
e
.
t
o
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
f
r
o
m
,
 
k
e
y
:
 
`
$
{
e
.
t
o
}
-
$
{
e
.
f
r
o
m
}
`
 
}
)
;


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
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
t
o
.
l
o
c
a
l
e
C
o
m
p
a
r
e
(
b
.
t
o
)
)
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
 
N
o
d
e
C
o
l
o
r
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
W
"
]
)
)
;


 
 
c
o
n
s
t
 
d
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
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
m
e
t
a
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
>
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
{
}
]
)
)
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
e
d
g
e
L
a
b
e
l
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
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
e
d
g
e
T
r
e
e
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
e
d
g
e
B
a
c
k
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;




 
 
l
e
t
 
t
i
m
e
 
=
 
0
;


 
 
c
o
n
s
t
 
r
e
c
S
t
a
c
k
:
 
{
 
u
:
 
s
t
r
i
n
g
;
 
n
i
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




 
 
c
o
n
s
t
 
c
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
D
F
S
F
r
a
m
e
>
)
:
 
D
F
S
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
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
 
p
a
t
c
h
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
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
n
o
d
e
M
e
t
a
:
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
m
e
t
a
)
.
m
a
p
(
(
[
k
,
 
v
]
)
 
=
>
 
[
k
,
 
{
 
.
.
.
v
 
}
]
)
)
,


 
 
 
 
e
d
g
e
L
a
b
e
l
s
:
 
{
 
.
.
.
e
d
g
e
L
a
b
e
l
s
 
}
,


 
 
 
 
e
d
g
e
T
r
e
e
:
 
n
e
w
 
S
e
t
(
e
d
g
e
T
r
e
e
)
,


 
 
 
 
e
d
g
e
B
a
c
k
:
 
n
e
w
 
S
e
t
(
e
d
g
e
B
a
c
k
)
,


 
 
 
 
s
t
a
c
k
:
 
r
e
c
S
t
a
c
k
.
m
a
p
(
(
s
)
 
=
>
 
s
.
u
)
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
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
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
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
 
t
i
m
e
 
=
 
0
,
 
e
v
e
r
y
 
v
e
r
t
e
x
 
W
H
I
T
E
.
"
,
 
v
a
r
s
:
 
{
 
t
i
m
e
 
}
 
}
)
)
;




 
 
t
i
m
e
+
+
;


 
 
c
o
l
o
r
[
s
o
u
r
c
e
]
 
=
 
"
G
"
;


 
 
s
t
a
t
e
[
s
o
u
r
c
e
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
d
[
s
o
u
r
c
e
]
 
=
 
t
i
m
e
;


 
 
m
e
t
a
[
s
o
u
r
c
e
]
 
=
 
{
 
d
:
 
t
i
m
e
 
}
;


 
 
r
e
c
S
t
a
c
k
.
p
u
s
h
(
{
 
u
:
 
s
o
u
r
c
e
,
 
n
i
:
 
0
 
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
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
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
V
i
s
i
t
 
$
{
s
o
u
r
c
e
}
:
 
c
o
l
o
r
 
G
R
A
Y
,
 
d
[
$
{
s
o
u
r
c
e
}
]
 
=
 
$
{
t
i
m
e
}
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
:
 
s
o
u
r
c
e
 
}
,
 
f
l
a
s
h
K
e
y
:
 
s
o
u
r
c
e
 
}
)
)
;




 
 
w
h
i
l
e
 
(
r
e
c
S
t
a
c
k
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
t
o
p
 
=
 
r
e
c
S
t
a
c
k
[
r
e
c
S
t
a
c
k
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


 
 
 
 
c
o
n
s
t
 
{
 
u
 
}
 
=
 
t
o
p
;


 
 
 
 
i
f
 
(
t
o
p
.
n
i
 
>
=
 
a
d
j
[
u
]
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
t
i
m
e
+
+
;


 
 
 
 
 
 
c
o
l
o
r
[
u
]
 
=
 
"
B
"
;


 
 
 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
m
e
t
a
[
u
]
 
=
 
{
 
.
.
.
m
e
t
a
[
u
]
,
 
f
:
 
t
i
m
e
 
}
;


 
 
 
 
 
 
r
e
c
S
t
a
c
k
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
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
4
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
i
s
h
 
$
{
u
}
:
 
c
o
l
o
r
 
B
L
A
C
K
,
 
f
[
$
{
u
}
]
 
=
 
$
{
t
i
m
e
}
.
 
P
o
p
 
f
r
o
m
 
s
t
a
c
k
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
 
}
 
}
)
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
 
e
d
g
e
 
=
 
a
d
j
[
u
]
[
t
o
p
.
n
i
+
+
]
;


 
 
 
 
c
o
n
s
t
 
v
 
=
 
e
d
g
e
.
t
o
;


 
 
 
 
c
o
n
s
t
 
k
 
=
 
e
d
g
e
.
k
e
y
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
7
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
L
o
o
k
 
a
t
 
e
d
g
e
 
$
{
u
}
→
$
{
v
}
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
,
 
v
 
}
 
}
)
)
;


 
 
 
 
i
f
 
(
c
o
l
o
r
[
v
]
 
=
=
=
 
"
W
"
)
 
{


 
 
 
 
 
 
e
d
g
e
L
a
b
e
l
s
[
k
]
 
=
 
"
T
"
;


 
 
 
 
 
 
e
d
g
e
T
r
e
e
.
a
d
d
(
k
)
;


 
 
 
 
 
 
t
i
m
e
+
+
;


 
 
 
 
 
 
c
o
l
o
r
[
v
]
 
=
 
"
G
"
;


 
 
 
 
 
 
s
t
a
t
e
[
v
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
d
[
v
]
 
=
 
t
i
m
e
;


 
 
 
 
 
 
m
e
t
a
[
v
]
 
=
 
{
 
d
:
 
t
i
m
e
 
}
;


 
 
 
 
 
 
r
e
c
S
t
a
c
k
.
p
u
s
h
(
{
 
u
:
 
v
,
 
n
i
:
 
0
 
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
c
l
o
n
e
(
{
 
l
i
n
e
:
 
9
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
v
}
 
i
s
 
W
H
I
T
E
,
 
T
r
e
e
 
e
d
g
e
.
 
R
e
c
u
r
s
e
 
i
n
t
o
 
$
{
v
}
.
 
d
[
$
{
v
}
]
 
=
 
$
{
t
i
m
e
}
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
,
 
v
 
}
,
 
f
l
a
s
h
K
e
y
:
 
v
 
}
)
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
c
o
l
o
r
[
v
]
 
=
=
=
 
"
G
"
)
 
{


 
 
 
 
 
 
e
d
g
e
L
a
b
e
l
s
[
k
]
 
=
 
"
B
"
;


 
 
 
 
 
 
e
d
g
e
B
a
c
k
.
a
d
d
(
k
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
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
v
}
 
i
s
 
G
R
A
Y
 
(
a
n
c
e
s
t
o
r
 
o
n
 
s
t
a
c
k
)
,
 
B
a
c
k
 
e
d
g
e
.
 
C
y
c
l
e
 
d
e
t
e
c
t
e
d
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
,
 
v
 
}
 
}
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
 
=
 
d
[
u
]
 
<
 
d
[
v
]
;


 
 
 
 
 
 
e
d
g
e
L
a
b
e
l
s
[
k
]
 
=
 
i
s
F
 
?
 
"
F
"
 
:
 
"
C
"
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
3
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
v
}
 
i
s
 
B
L
A
C
K
,
 
$
{
i
s
F
 
?
 
"
F
o
r
w
a
r
d
"
 
:
 
"
C
r
o
s
s
"
}
 
e
d
g
e
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
,
 
u
,
 
v
 
}
 
}
)
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
c
l
o
n
e
(
{
 
l
i
n
e
:
 
4
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
F
S
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
 
c
o
m
p
l
e
t
e
.
 
T
i
m
e
s
t
a
m
p
s
 
s
h
o
w
n
 
a
s
 
d
/
f
.
`
,
 
v
a
r
s
:
 
{
 
t
i
m
e
 
}
 
}
)
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
 
 
I
n
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
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


 
 
a
c
t
i
v
e
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


 
 
d
o
n
e
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
;




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
r
a
w
E
d
g
e
s
,


 
 
p
o
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
d
s
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


 
 
r
a
w
E
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
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
r
e
c
t
e
d
:
 
b
o
o
l
e
a
n
 
}
[
]
;


 
 
p
o
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
 
}
>
;


 
 
f
r
a
m
e
:
 
D
F
S
F
r
a
m
e
;


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
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
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
w
-
f
u
l
l
 
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
H
}
 
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
b
l
o
c
k
 
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
r
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
8
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
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
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
0
,
6
 
L
8
,
3
 
z
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
b
o
r
d
e
r
}
 
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
r
-
t
r
e
e
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
8
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
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
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
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
f
b
b
f
2
4
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
r
-
b
a
c
k
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
8
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
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
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
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
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


 
 
 
 
 
 
 
 
{
r
a
w
E
d
g
e
s
.
m
a
p
(
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
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
)
 
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
T
r
e
e
 
=
 
f
r
a
m
e
.
e
d
g
e
T
r
e
e
.
h
a
s
(
k
)
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
 
f
r
a
m
e
.
e
d
g
e
B
a
c
k
.
h
a
s
(
k
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
o
k
e
 
=
 
i
s
T
r
e
e
 
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
 
i
s
B
a
c
k
 
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
 
m
a
r
k
e
r
I
d
 
=
 
i
s
T
r
e
e
 
?
 
"
u
r
l
(
#
a
r
r
-
t
r
e
e
)
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
u
r
l
(
#
a
r
r
-
b
a
c
k
)
"
 
:
 
"
u
r
l
(
#
a
r
r
)
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
p
2
.
x
 
-
 
p
1
.
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
p
2
.
y
 
-
 
p
1
.
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
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
 
e
x
 
=
 
p
2
.
x
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
y
 
=
 
p
2
.
y
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
x
 
=
 
p
1
.
x
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
y
 
=
 
p
1
.
y
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
s
x
}
 
y
1
=
{
s
y
}
 
x
2
=
{
e
x
}
 
y
2
=
{
e
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
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
i
s
T
r
e
e
 
|
|
 
i
s
B
a
c
k
 
?
 
2
.
5
 
:
 
1
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
{
e
.
d
i
r
e
c
t
e
d
 
?
 
m
a
r
k
e
r
I
d
 
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
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
)
 
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
s
 
=
 
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
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
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
n
s
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
 
=
 
f
r
a
m
e
.
n
o
d
e
M
e
t
a
[
i
d
]
 
?
?
 
{
}
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
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
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
.
5
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
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
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
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"
 
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
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
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
=
"
7
0
0
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
d
 
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
t
e
x
t
 
x
=
{
p
.
x
 
-
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
6
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
a
c
c
e
n
t
}
 
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
=
"
7
0
0
"
 
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
m
o
n
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
m
.
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
f
 
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
t
e
x
t
 
x
=
{
p
.
x
 
+
 
4
}
 
y
=
{
p
.
y
 
-
 
1
6
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
W
e
i
g
h
t
=
"
7
0
0
"
 
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
m
o
n
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
=
{
m
.
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
 
I
n
l
i
n
e
 
S
t
a
c
k
V
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
 
S
t
a
c
k
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
 
s
t
r
i
n
g
[
]
 
}
)
 
{


 
 
c
o
n
s
t
 
r
e
v
e
r
s
e
d
 
=
 
[
.
.
.
i
t
e
m
s
]
.
r
e
v
e
r
s
e
(
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
1
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
b
-
1
"
>
/
 
d
f
s
 
s
t
a
c
k
 
(
t
o
p
 
f
i
r
s
t
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
 
m
i
n
-
h
-
8
 
p
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
0
0
"
>


 
 
 
 
 
 
 
 
{
r
e
v
e
r
s
e
d
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
 
(


 
 
 
 
 
 
 
 
 
 
r
e
v
e
r
s
e
d
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
i
n
l
i
n
e
-
b
l
o
c
k
 
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
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
b
g
-
b
l
u
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
w
h
i
t
e
 
b
o
r
d
e
r
-
b
l
u
e
-
5
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
b
l
u
e
-
3
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
b
l
u
e
-
7
0
0
 
t
e
x
t
-
b
l
u
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
b
l
u
e
-
3
0
0
"
}
`
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
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
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
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
,
 
D
>
E
,
 
E
>
B
,
 
C
>
E
"
)
;


 
 
c
o
n
s
t
 
[
s
o
u
r
c
e
,
 
s
e
t
S
o
u
r
c
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
(
"
A
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
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
E
d
g
e
L
i
s
t
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
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
 
i
d
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
d
?
.
n
o
d
e
I
d
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
n
o
d
e
I
d
s
]
)
;


 
 
c
o
n
s
t
 
r
a
w
E
d
g
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
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
e
d
g
e
s
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
 
b
u
i
l
d
D
F
S
F
r
a
m
e
s
(
i
d
s
,
 
r
a
w
E
d
g
e
s
,
 
s
o
u
r
c
e
)
,
 
[
i
d
s
,
 
r
a
w
E
d
g
e
s
,
 
s
o
u
r
c
e
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
o
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;




 
 
c
o
n
s
t
 
l
a
b
e
l
e
d
E
d
g
e
s
 
=
 
f
r
a
m
e
 
?
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
f
r
a
m
e
.
e
d
g
e
L
a
b
e
l
s
)
 
:
 
[
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
`
D
F
S
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
`
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
 
i
t
e
m
s
-
e
n
d
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
-
1
 
m
i
n
-
w
-
6
4
"
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
E
d
g
e
s
 
(
A
>
B
 
d
i
r
e
c
t
e
d
 
o
r
 
A
-
B
 
u
n
d
i
r
e
c
t
e
d
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
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
A
>
B
,
 
B
>
C
,
 
C
>
A
,
 
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
U
s
e
 
'
>
'
 
f
o
r
 
d
i
r
e
c
t
e
d
,
 
'
-
'
 
f
o
r
 
u
n
d
i
r
e
c
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
T
r
e
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
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
B
>
E
,
 
C
>
F
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
 
b
a
c
k
 
e
d
g
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
A
>
B
,
 
B
>
C
,
 
C
>
A
,
 
C
>
D
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
A
G
 
d
i
a
m
o
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
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
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
C
r
o
s
s
 
e
d
g
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
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
,
 
C
>
B
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
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
E
d
g
e
L
i
s
t
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
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
 
s
o
u
r
c
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
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
u
r
c
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
 
s
e
t
S
o
u
r
c
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
3
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
<
o
p
t
i
o
n
 
k
e
y
=
{
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
}
<
/
o
p
t
i
o
n
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
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
d
"
,
 
"
u
"
,
 
"
v
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


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
r
a
w
E
d
g
e
s
=
{
r
a
w
E
d
g
e
s
}
 
p
o
s
=
{
p
o
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
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
l
a
b
e
l
e
d
E
d
g
e
s
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
l
a
b
e
l
e
d
E
d
g
e
s
.
m
a
p
(
(
[
k
,
 
l
a
b
]
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
 
l
a
b
 
=
=
=
 
"
T
"
 
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
 
l
a
b
 
=
=
=
 
"
B
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
 
"
#
f
5
9
e
0
b
"
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
p
a
n
 
k
e
y
=
{
k
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
2
 
p
y
-
0
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
 
b
o
r
d
e
r
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
 
c
,
 
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
 
c
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
 
`
$
{
c
}
2
2
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
}
 
[
{
l
a
b
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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


 
 
 
 
 
 
 
 
)
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
S
t
a
c
k
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
.
s
t
a
c
k
}
 
/
>
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
f
l
e
x
 
g
a
p
-
2
 
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


 
 
 
 
 
 
 
 
 
 
{
[
[
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
 
"
G
R
A
Y
 
(
o
n
 
s
t
a
c
k
)
"
]
,
 
[
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
 
"
B
L
A
C
K
 
(
d
o
n
e
)
"
]
,
 
[
"
#
f
b
b
f
2
4
"
,
 
"
T
 
t
r
e
e
 
e
d
g
e
"
]
,
 
[
"
#
e
f
4
4
4
4
"
,
 
"
B
 
b
a
c
k
 
e
d
g
e
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
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
l
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
 
g
a
p
-
1
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
b
l
o
c
k
 
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
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
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
 
D
F
S
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
 
s
e
c
t
i
o
n
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
D
F
S
 
i
n
 
o
n
e
 
l
i
n
e
"
,
 
b
o
d
y
:
 
"
G
o
 
a
s
 
d
e
e
p
 
a
s
 
p
o
s
s
i
b
l
e
,
 
t
h
e
n
 
b
a
c
k
t
r
a
c
k
.
 
U
s
e
s
 
a
 
s
t
a
c
k
 
(
i
m
p
l
i
c
i
t
 
v
i
a
 
r
e
c
u
r
s
i
o
n
,
 
o
r
 
e
x
p
l
i
c
i
t
)
.
 
E
a
c
h
 
v
e
r
t
e
x
 
g
e
t
s
 
a
 
d
i
s
c
o
v
e
r
y
 
t
i
m
e
 
d
[
]
 
a
n
d
 
f
i
n
i
s
h
 
t
i
m
e
 
f
[
]
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
E
d
g
e
 
c
l
a
s
s
i
f
i
c
a
t
i
o
n
 
(
d
i
r
e
c
t
e
d
)
"
,
 
b
o
d
y
:
 
"
T
r
e
e
 
e
d
g
e
,
 
d
i
s
c
o
v
e
r
s
 
a
 
W
H
I
T
E
 
v
e
r
t
e
x
.
 
B
a
c
k
 
e
d
g
e
,
 
r
e
a
c
h
e
s
 
a
 
G
R
A
Y
 
a
n
c
e
s
t
o
r
 
(
i
m
p
l
i
e
s
 
c
y
c
l
e
)
.
 
F
o
r
w
a
r
d
 
e
d
g
e
,
 
r
e
a
c
h
e
s
 
a
 
B
L
A
C
K
 
d
e
s
c
e
n
d
a
n
t
.
 
C
r
o
s
s
 
e
d
g
e
,
 
r
e
a
c
h
e
s
 
a
 
B
l
a
c
k
 
n
o
n
-
d
e
s
c
e
n
d
a
n
t
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
P
a
r
e
n
t
h
e
s
i
s
 
t
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
 
a
n
y
 
t
w
o
 
v
e
r
t
i
c
e
s
 
u
,
 
v
:
 
i
n
t
e
r
v
a
l
s
 
[
d
[
u
]
,
 
f
[
u
]
]
 
a
n
d
 
[
d
[
v
]
,
 
f
[
v
]
]
 
a
r
e
 
e
i
t
h
e
r
 
d
i
s
j
o
i
n
t
 
o
r
 
n
e
s
t
e
d
.
 
T
h
i
s
 
i
s
 
w
h
a
t
 
m
a
k
e
s
 
D
F
S
 
t
i
m
e
s
t
a
m
p
s
 
s
o
 
u
s
e
f
u
l
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
 
b
o
d
y
:
 
"
O
(
V
 
+
 
E
)
 
w
i
t
h
 
a
d
j
a
c
e
n
c
y
 
l
i
s
t
,
 
s
a
m
e
 
a
s
 
B
F
S
.
 
D
F
S
 
i
s
 
t
h
e
 
w
o
r
k
h
o
r
s
e
 
f
o
r
 
t
o
p
o
l
o
g
i
c
a
l
 
s
o
r
t
,
 
S
C
C
,
 
b
r
i
d
g
e
 
f
i
n
d
i
n
g
,
 
a
n
d
 
m
a
n
y
 
m
o
r
e
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
m
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
W
a
l
k
 
a
 
m
a
z
e
.
 
T
a
k
e
 
e
v
e
r
y
 
c
o
r
r
i
d
o
r
.
 
B
a
c
k
t
r
a
c
k
 
a
t
 
d
e
a
d
 
e
n
d
s
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


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
e
x
p
l
o
r
i
n
g
 
a
 
m
a
z
e
 
b
y
 
a
l
w
a
y
s
 
w
a
l
k
i
n
g
 
i
n
t
o
 
t
h
e
 
n
e
x
t
 
u
n
e
x
p
l
o
r
e
d
 
c
o
r
r
i
d
o
r
.
 
W
h
e
n
 
y
o
u
 
h
i
t


 
 
 
 
 
 
 
 
 
 
a
 
d
e
a
d
 
e
n
d
,
 
b
a
c
k
 
u
p
 
t
o
 
t
h
e
 
l
a
s
t
 
j
u
n
c
t
i
o
n
 
a
n
d
 
t
r
y
 
a
n
o
t
h
e
r
 
e
x
i
t
.
 
T
h
a
t
 
i
s
 
D
F
S
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
s
e
c
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
 
m
b
-
2
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
O
p
e
n
 
t
h
e
 
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
 
a
n
d
 
c
h
e
c
k
 
t
h
e
s
e
 
t
r
a
c
e
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
[


 
 
 
 
 
 
 
 
"
O
n
 
p
r
e
s
e
t
 
'
W
i
t
h
 
b
a
c
k
 
e
d
g
e
'
 
(
A
>
B
,
 
B
>
C
,
 
C
>
A
,
 
C
>
D
)
 
f
r
o
m
 
A
,
 
w
h
i
c
h
 
e
d
g
e
 
i
s
 
t
h
e
 
b
a
c
k
 
e
d
g
e
?
 
 
(
E
x
p
e
c
t
e
d
:
 
C
>
A
)
"
,


 
 
 
 
 
 
 
 
"
O
n
 
p
r
e
s
e
t
 
'
D
A
G
 
d
i
a
m
o
n
d
'
 
f
r
o
m
 
A
,
 
l
i
s
t
 
t
h
e
 
f
i
n
i
s
h
 
o
r
d
e
r
.
 
 
(
E
x
p
e
c
t
e
d
:
 
D
,
 
B
,
 
C
,
 
A
,
 
t
y
p
i
c
a
l
 
l
e
f
t
-
f
i
r
s
t
)
"
,


 
 
 
 
 
 
 
 
"
C
a
n
 
D
F
S
 
o
n
 
a
n
 
u
n
d
i
r
e
c
t
e
d
 
g
r
a
p
h
 
p
r
o
d
u
c
e
 
a
 
f
o
r
w
a
r
d
 
e
d
g
e
?
 
 
(
E
x
p
e
c
t
e
d
:
 
N
o
,
 
o
n
l
y
 
t
r
e
e
 
a
n
d
 
b
a
c
k
 
e
d
g
e
s
)
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
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
 
{
q
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
 
t
i
m
e
s
t
a
m
p
s
?
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


 
 
 
 
 
 
 
 
 
 
D
i
s
c
o
v
e
r
y
/
f
i
n
i
s
h
 
t
i
m
e
s
 
u
n
l
o
c
k
 
t
o
p
o
l
o
g
i
c
a
l
 
s
o
r
t
 
(
r
e
v
e
r
s
e
 
o
r
d
e
r
 
o
f
 
f
i
n
i
s
h
)
,
 
S
C
C
 
(
T
a
r
j
a
n
'
s
 
/


 
 
 
 
 
 
 
 
 
 
K
o
s
a
r
a
j
u
'
s
)
,
 
b
r
i
d
g
e
 
d
e
t
e
c
t
i
o
n
 
(
c
o
m
p
a
r
e
 
d
 
a
n
d
 
l
o
w
)
.
 
M
e
m
o
r
i
z
e
 
o
n
e
 
r
u
l
e
:
 
s
o
r
t
 
b
y
 
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


 
 
 
 
 
 
 
 
 
 
f
i
n
i
s
h
 
t
i
m
e
 
t
o
 
g
e
t
 
a
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
o
f
 
a
 
D
A
G
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
B
a
c
k
 
e
d
g
e
 
i
m
p
l
i
e
s
 
c
y
c
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
"
>


 
 
 
 
 
 
 
 
 
 
A
 
D
F
S
 
o
n
 
a
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
 
f
i
n
d
s
 
a
 
b
a
c
k
 
e
d
g
e
 
i
f
 
a
n
d
 
o
n
l
y
 
i
f
 
t
h
e
 
g
r
a
p
h
 
h
a
s
 
a
 
c
y
c
l
e
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
 
c
l
e
a
n
e
s
t
 
c
y
c
l
e
-
d
e
t
e
c
t
i
o
n
 
a
l
g
o
r
i
t
h
m
 
y
o
u
 
c
a
n
 
m
e
m
o
r
i
z
e
 
f
o
r
 
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
E
d
g
e
 
t
y
p
e
s
 
i
n
 
u
n
d
i
r
e
c
t
e
d
 
v
s
 
d
i
r
e
c
t
e
d
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
.
5
 
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
U
n
d
i
r
e
c
t
e
d
 
D
F
S
:
 
o
n
l
y
 
t
r
e
e
 
e
d
g
e
s
 
a
n
d
 
b
a
c
k
 
e
d
g
e
s
.
 
F
o
r
w
a
r
d
 
a
n
d
 
c
r
o
s
s
 
c
a
n
n
o
t
 
a
p
p
e
a
r
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
D
i
r
e
c
t
e
d
 
D
F
S
:
 
a
l
l
 
f
o
u
r
 
t
y
p
e
s
 
(
t
r
e
e
,
 
b
a
c
k
,
 
f
o
r
w
a
r
d
,
 
c
r
o
s
s
)
 
a
r
e
 
p
o
s
s
i
b
l
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
B
a
c
k
 
e
d
g
e
 
i
n
 
u
n
d
i
r
e
c
t
e
d
 
=
 
a
n
c
e
s
t
o
r
 
e
d
g
e
,
 
w
h
i
c
h
 
s
t
i
l
l
 
r
e
v
e
a
l
s
 
a
 
c
y
c
l
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
4
_
D
F
S
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
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
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
I
n
 
D
F
S
 
o
n
 
a
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
,
 
w
h
i
c
h
 
e
d
g
e
 
t
y
p
e
 
i
m
p
l
i
e
s
 
t
h
e
 
g
r
a
p
h
 
h
a
s
 
a
 
c
y
c
l
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
T
r
e
e
"
,
 
"
F
o
r
w
a
r
d
"
,
 
"
C
r
o
s
s
"
,
 
"
B
a
c
k
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
 
3
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
 
b
a
c
k
 
e
d
g
e
 
c
o
n
n
e
c
t
s
 
a
 
d
e
s
c
e
n
d
a
n
t
 
t
o
 
a
n
 
a
n
c
e
s
t
o
r
 
s
t
i
l
l
 
o
n
 
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
 
s
t
a
c
k
,
 
d
e
f
i
n
i
t
i
v
e
 
p
r
o
o
f
 
o
f
 
a
 
c
y
c
l
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
T
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
 
o
f
 
D
F
S
 
u
s
i
n
g
 
a
d
j
a
c
e
n
c
y
 
l
i
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
O
(
V
 
l
o
g
 
V
)
"
,
 
"
O
(
V
²
)
"
,
 
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
·
E
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
E
a
c
h
 
v
e
r
t
e
x
 
v
i
s
i
t
e
d
 
o
n
c
e
,
 
e
a
c
h
 
e
d
g
e
 
e
x
a
m
i
n
e
d
 
O
(
1
)
 
t
i
m
e
s
.
 
T
o
t
a
l
 
O
(
V
 
+
 
E
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
D
u
r
i
n
g
 
D
F
S
 
a
 
v
e
r
t
e
x
 
i
s
 
c
o
l
o
r
e
d
 
G
R
A
Y
 
w
h
i
l
e
…
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
U
n
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
O
n
 
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
 
s
t
a
c
k
 
(
d
i
s
c
o
v
e
r
e
d
 
b
u
t
 
n
o
t
 
f
i
n
i
s
h
e
d
)
"
,


 
 
 
 
 
 
 
 
"
F
u
l
l
y
 
p
r
o
c
e
s
s
e
d
"
,


 
 
 
 
 
 
 
 
"
N
e
v
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
W
H
I
T
E
 
=
 
u
n
v
i
s
i
t
e
d
,
 
G
R
A
Y
 
=
 
d
i
s
c
o
v
e
r
e
d
 
&
 
a
c
t
i
v
e
,
 
B
L
A
C
K
 
=
 
f
i
n
i
s
h
e
d
.
 
G
R
A
Y
 
m
e
a
n
s
 
i
t
 
i
s
 
s
t
i
l
l
 
o
n
 
t
h
e
 
s
t
a
c
k
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
 
D
F
S
 
o
n
 
a
n
 
U
N
D
I
R
E
C
T
E
D
 
g
r
a
p
h
,
 
w
h
i
c
h
 
e
d
g
e
 
t
y
p
e
s
 
c
a
n
 
a
p
p
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
T
r
e
e
 
a
n
d
 
F
o
r
w
a
r
d
 
o
n
l
y
"
,


 
 
 
 
 
 
 
 
"
T
r
e
e
 
a
n
d
 
B
a
c
k
 
o
n
l
y
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
f
o
u
r
"
,


 
 
 
 
 
 
 
 
"
C
r
o
s
s
 
a
n
d
 
F
o
r
w
a
r
d
 
o
n
l
y
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
n
 
u
n
d
i
r
e
c
t
e
d
 
D
F
S
,
 
e
v
e
r
y
 
n
o
n
-
t
r
e
e
 
e
d
g
e
 
m
u
s
t
 
b
e
 
a
 
b
a
c
k
 
e
d
g
e
,
 
f
o
r
w
a
r
d
 
a
n
d
 
c
r
o
s
s
 
e
d
g
e
s
 
c
a
n
n
o
t
 
o
c
c
u
r
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
p
t
h
-
F
i
r
s
t
 
S
e
a
r
c
h
 
(
D
F
S
)
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
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
3
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
V
e
r
y
 
h
i
g
h
,
 
f
o
u
n
d
a
t
i
o
n
 
o
f
 
t
o
p
o
 
s
o
r
t
,
 
S
C
C
,
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
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
o
p
o
l
o
g
i
c
a
l
 
S
o
r
t
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


