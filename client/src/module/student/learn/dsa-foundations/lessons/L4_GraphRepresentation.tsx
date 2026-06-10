
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
 
 
P
a
r
s
e
 
 
(
u
s
e
d
 
b
y
 
T
r
y
T
a
b
 
o
n
l
y
,
 
n
o
 
G
r
a
p
h
C
a
n
v
a
s
 
n
e
e
d
e
d
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
r
s
e
d
G
r
a
p
h
 
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
 
w
e
i
g
h
t
?
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
 
P
a
r
s
e
d
G
r
a
p
h
 
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
 
w
e
i
g
h
t
?
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
 
m
 
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
[
-
:
]
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
(
?
:
:
(
-
?
\
d
+
)
)
?
$
/
)
;


 
 
 
 
i
f
 
(
!
m
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
 
[
,
 
a
,
 
b
,
 
w
]
 
=
 
m
;


 
 
 
 
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
 
a
,
 
t
o
:
 
b
,
 
w
e
i
g
h
t
:
 
w
 
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
 
?
 
N
u
m
b
e
r
(
w
)
 
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
;


 
 
 
 
i
d
s
.
a
d
d
(
a
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
b
)
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
G
R
A
P
H
 
=
 
"
A
-
B
:
4
,
 
A
-
C
:
2
,
 
B
-
C
:
3
,
 
B
-
D
:
5
,
 
C
-
D
:
1
,
 
D
-
E
:
6
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
 
2
0
0
,


 
 
c
y
 
=
 
1
4
0
,


 
 
r
 
=
 
1
0
0
,


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




i
n
t
e
r
f
a
c
e
 
G
r
a
p
h
F
r
a
m
e
 
{


 
 
e
d
g
e
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
 
|
 
n
u
l
l
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
F
r
a
m
e
s
(


 
 
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
 
w
e
i
g
h
t
?
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
,


)
:
 
G
r
a
p
h
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
r
a
m
e
s
:
 
G
r
a
p
h
F
r
a
m
e
[
]
 
=
 
[


 
 
 
 
{
 
e
d
g
e
I
d
x
:
 
n
u
l
l
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
 
f
u
l
l
 
g
r
a
p
h
,
 
n
o
 
e
d
g
e
 
h
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
 
y
e
t
.
 
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
 
w
a
l
k
 
e
a
c
h
 
e
d
g
e
.
"
 
}
,


 
 
]
;


 
 
e
d
g
e
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
e
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
 
l
a
b
e
l
 
=
 
e
.
w
e
i
g
h
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
 
?
 
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
↔
$
{
e
.
t
o
}
 
(
w
e
i
g
h
t
 
$
{
e
.
w
e
i
g
h
t
}
)
`
 
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
↔
$
{
e
.
t
o
}
`
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


 
 
 
 
 
 
e
d
g
e
I
d
x
:
 
i
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
E
d
g
e
 
$
{
l
a
b
e
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
e
d
 
i
n
 
t
h
e
 
d
i
a
g
r
a
m
,
 
m
a
t
r
i
x
 
c
e
l
l
,
 
a
n
d
 
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
 
e
n
t
r
y
.
`
,


 
 
 
 
}
)
;


 
 
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
 
e
d
g
e
I
d
x
:
 
n
u
l
l
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
A
l
l
 
e
d
g
e
s
 
w
a
l
k
e
d
.
 
E
v
e
r
y
 
n
o
n
-
z
e
r
o
 
c
e
l
l
 
i
n
 
t
h
e
 
m
a
t
r
i
x
 
m
a
p
s
 
t
o
 
a
n
 
e
n
t
r
y
 
i
n
 
t
h
e
 
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
.
"
 
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
 
G
r
a
p
h
D
i
a
g
r
a
m
(
{


 
 
i
d
s
,


 
 
p
o
s
,


 
 
e
d
g
e
s
,


 
 
d
i
r
e
c
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
E
d
g
e
I
d
x
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
 
w
e
i
g
h
t
?
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
;


 
 
a
c
t
i
v
e
E
d
g
e
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
 
|
 
n
u
l
l
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
 
4
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
 
2
8
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
s
v
g


 
 
 
 
 
 
w
i
d
t
h
=
"
1
0
0
%
"


 
 
 
 
 
 
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


 
 
 
 
 
 
p
r
e
s
e
r
v
e
A
s
p
e
c
t
R
a
t
i
o
=
"
x
M
i
d
Y
M
i
d
 
m
e
e
t
"


 
 
 
 
 
 
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
 
}
}


 
 
 
 
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
o
w
-
d
e
f
a
u
l
t
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
o
w
-
a
c
t
i
v
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
e
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
 
i
s
A
c
t
i
v
e
 
=
 
a
c
t
i
v
e
E
d
g
e
I
d
x
 
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
 
m
x
 
=
 
(
p
1
.
x
 
+
 
p
2
.
x
)
 
/
 
2
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
y
 
=
 
(
p
1
.
y
 
+
 
p
2
.
y
)
 
/
 
2
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
 
n
x
 
=
 
-
d
y
 
/
 
l
e
n
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
y
 
=
 
d
x
 
/
 
l
e
n
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
u
r
v
e
 
=
 
0
.
1
8
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
x
 
=
 
m
x
 
+
 
n
x
 
*
 
l
e
n
 
*
 
c
u
r
v
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
y
 
=
 
m
y
 
+
 
n
y
 
*
 
l
e
n
 
*
 
c
u
r
v
e
;


 
 
 
 
 
 
 
 
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
R
 
=
 
1
8
;


 
 
 
 
 
 
 
 
/
/
 
A
d
j
u
s
t
 
e
n
d
 
p
o
i
n
t
 
s
o
 
a
r
r
o
w
 
t
i
p
 
d
o
e
s
n
'
t
 
o
v
e
r
l
a
p
 
n
o
d
e
 
c
i
r
c
l
e


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
x
2
 
=
 
p
2
.
x
 
-
 
(
d
x
 
/
 
l
e
n
)
 
*
 
N
O
D
E
_
R
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
y
2
 
=
 
p
2
.
y
 
-
 
(
d
y
 
/
 
l
e
n
)
 
*
 
N
O
D
E
_
R
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
p
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
`
M
$
{
p
1
.
x
}
,
$
{
p
1
.
y
}
 
Q
$
{
c
x
}
,
$
{
c
y
}
 
$
{
e
x
2
}
,
$
{
e
y
2
}
`
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
i
s
A
c
t
i
v
e
 
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
A
c
t
i
v
e
 
?
 
2
.
5
 
:
 
1
.
5
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
{
i
s
A
c
t
i
v
e
 
?
 
u
n
d
e
f
i
n
e
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
d
i
r
e
c
t
e
d
 
?
 
(
i
s
A
c
t
i
v
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
o
w
-
a
c
t
i
v
e
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
o
w
-
d
e
f
a
u
l
t
)
"
)
 
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
s
t
r
o
k
e
 
0
.
2
5
s
,
 
s
t
r
o
k
e
-
w
i
d
t
h
 
0
.
2
5
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
w
e
i
g
h
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
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
c
y
 
-
 
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
i
s
A
c
t
i
v
e
 
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
f
i
l
l
 
0
.
2
5
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
w
e
i
g
h
t
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
 
i
s
A
c
t
i
v
e
 
=


 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
I
d
x
 
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
e
d
g
e
s
[
a
c
t
i
v
e
E
d
g
e
I
d
x
]
?
.
f
r
o
m
 
=
=
=
 
i
d
 
|
|
 
e
d
g
e
s
[
a
c
t
i
v
e
E
d
g
e
I
d
x
]
?
.
t
o
 
=
=
=
 
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
1
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
i
s
A
c
t
i
v
e
 
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
g
P
a
n
e
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
i
s
A
c
t
i
v
e
 
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
A
c
t
i
v
e
 
?
 
2
 
:
 
1
.
5
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
f
i
l
l
 
0
.
2
5
s
,
 
s
t
r
o
k
e
 
0
.
2
5
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
c
e
n
t
r
a
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
i
s
A
c
t
i
v
e
 
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
D
E
F
A
U
L
T
_
G
R
A
P
H
)
;


 
 
c
o
n
s
t
 
[
d
i
r
e
c
t
e
d
,
 
s
e
t
D
i
r
e
c
t
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
(
f
a
l
s
e
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
 
{
 
i
d
s
,
 
e
d
g
e
s
,
 
p
o
s
,
 
a
d
j
,
 
m
a
t
r
i
x
 
}
 
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
 
p
 
=
 
p
a
r
s
e
d
 
?
?
 
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
]
,
 
e
d
g
e
s
:
 
[
]
 
}
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
p
.
n
o
d
e
I
d
s
)
;


 
 
 
 
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
 
w
?
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


 
 
 
 
 
 
p
.
n
o
d
e
I
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
,


 
 
 
 
)
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
p
.
n
o
d
e
I
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


 
 
 
 
c
o
n
s
t
 
m
a
t
r
i
x
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
[
]
 
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


 
 
 
 
 
 
A
r
r
a
y
(
n
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
,


 
 
 
 
)
;


 
 
 
 
c
o
n
s
t
 
i
d
x
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


 
 
 
 
p
.
n
o
d
e
I
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
 
(
i
d
x
[
i
d
]
 
=
 
i
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
 
p
.
e
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
 
w
:
 
e
.
w
e
i
g
h
t
 
}
)
;


 
 
 
 
 
 
m
a
t
r
i
x
[
i
d
x
[
e
.
f
r
o
m
]
]
[
i
d
x
[
e
.
t
o
]
]
 
=
 
e
.
w
e
i
g
h
t
 
?
?
 
1
;


 
 
 
 
 
 
i
f
 
(
!
d
i
r
e
c
t
e
d
)
 
{


 
 
 
 
 
 
 
 
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
 
w
:
 
e
.
w
e
i
g
h
t
 
}
)
;


 
 
 
 
 
 
 
 
m
a
t
r
i
x
[
i
d
x
[
e
.
t
o
]
]
[
i
d
x
[
e
.
f
r
o
m
]
]
 
=
 
e
.
w
e
i
g
h
t
 
?
?
 
1
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
{
 
i
d
s
:
 
p
.
n
o
d
e
I
d
s
,
 
e
d
g
e
s
:
 
p
.
e
d
g
e
s
,
 
p
o
s
,
 
a
d
j
,
 
m
a
t
r
i
x
 
}
;


 
 
}
,
 
[
p
a
r
s
e
d
,
 
d
i
r
e
c
t
e
d
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
F
r
a
m
e
s
(
e
d
g
e
s
)
,
 
[
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
 
a
c
t
i
v
e
E
d
g
e
I
d
x
 
=
 
f
r
a
m
e
?
.
e
d
g
e
I
d
x
 
?
?
 
n
u
l
l
;




 
 
/
/
 
W
h
i
c
h
 
m
a
t
r
i
x
 
c
e
l
l
s
 
a
r
e
 
h
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
 
f
o
r
 
t
h
e
 
a
c
t
i
v
e
 
e
d
g
e


 
 
c
o
n
s
t
 
a
c
t
i
v
e
E
d
g
e
 
=
 
a
c
t
i
v
e
E
d
g
e
I
d
x
 
!
=
=
 
n
u
l
l
 
?
 
e
d
g
e
s
[
a
c
t
i
v
e
E
d
g
e
I
d
x
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
 
n
o
d
e
I
d
x
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
 
(
n
o
d
e
I
d
x
[
i
d
]
 
=
 
i
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
G
r
a
p
h
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
,
 
A
d
j
a
c
e
n
c
y
 
M
a
t
r
i
x
 
v
s
 
A
d
j
a
c
e
n
c
y
 
L
i
s
t
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
 
l
i
s
t
 
(
A
-
B
:
w
e
i
g
h
t
,
 
w
e
i
g
h
t
 
o
p
t
i
o
n
a
l
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
e
.
g
.
 
A
-
B
:
4
,
 
B
-
C
:
3
,
 
A
-
C
:
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
m
m
a
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
 
e
d
g
e
s
.
 
T
o
g
g
l
e
 
d
i
r
e
c
t
e
d
/
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
 
b
e
l
o
w
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
i
a
n
g
l
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
-
B
:
2
,
 
B
-
C
:
3
,
 
A
-
C
:
4
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
P
a
t
h
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
-
B
:
1
,
 
B
-
C
:
2
,
 
C
-
D
:
3
,
 
D
-
E
:
4
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
A
-
B
,
 
A
-
C
,
 
A
-
D
,
 
A
-
E
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
n
s
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
-
B
:
4
,
 
A
-
C
:
2
,
 
B
-
C
:
3
,
 
B
-
D
:
5
,
 
C
-
D
:
1
,
 
D
-
E
:
6
,
 
A
-
E
:
7
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
 
g
r
a
p
h
 
t
y
p
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
a
c
t
i
v
e
=
{
!
d
i
r
e
c
t
e
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
D
i
r
e
c
t
e
d
(
f
a
l
s
e
)
}
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
 
a
c
t
i
v
e
=
{
d
i
r
e
c
t
e
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
D
i
r
e
c
t
e
d
(
t
r
u
e
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
i
r
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
{
/
*
 
T
h
r
e
e
-
p
a
n
e
l
 
l
a
y
o
u
t
 
*
/
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
 
m
d
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
3
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
G
r
a
p
h
 
d
i
a
g
r
a
m
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
C
a
r
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
m
d
:
c
o
l
-
s
p
a
n
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
r
a
p
h
 
d
i
a
g
r
a
m


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
 
=
=
=
 
0
 
?
 
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
E
n
t
e
r
 
e
d
g
e
s
 
a
b
o
v
e
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
r
a
p
h
D
i
a
g
r
a
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
s
=
{
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
d
g
e
s
=
{
e
d
g
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
r
e
c
t
e
d
=
{
d
i
r
e
c
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
I
d
x
=
{
a
c
t
i
v
e
E
d
g
e
I
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
C
a
r
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
m
d
:
c
o
l
-
s
p
a
n
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
 
=
=
=
 
0
 
?
 
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
A
d
d
 
e
d
g
e
s
 
t
o
 
s
e
e
 
m
a
t
r
i
x
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
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
l
a
p
s
e
:
 
"
c
o
l
l
a
p
s
e
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
m
o
n
o
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
5
r
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
6
p
x
"
 
}
}
 
/
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
6
p
x
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
&
&
 
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
i
d
 
|
|
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
i
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
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
i
d
s
.
m
a
p
(
(
r
o
w
I
d
,
 
i
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
o
w
I
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
6
p
x
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
&
&
 
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
r
o
w
I
d
 
|
|
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
r
o
w
I
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
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
c
o
l
I
d
,
 
j
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
 
m
a
t
r
i
x
[
i
]
[
j
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
a
s
 
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
 
i
s
A
c
t
i
v
e
C
e
l
l
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
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
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
r
o
w
I
d
 
&
&
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
c
o
l
I
d
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
!
d
i
r
e
c
t
e
d
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
c
o
l
I
d
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
r
o
w
I
d
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
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
j
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
3
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
3
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
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
b
o
r
d
e
r
}
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
 
i
s
A
c
t
i
v
e
C
e
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
A
c
t
i
v
e
C
e
l
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
 
h
a
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
0
.
2
5
s
,
 
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
s
 
?
 
v
 
:
 
"
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
p
a
c
e
:
 
O
(
V
²
)
.
 
E
d
g
e
 
c
h
e
c
k
:
 
O
(
1
)
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
C
a
r
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
m
d
:
c
o
l
-
s
p
a
n
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
 
=
=
=
 
0
 
?
 
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
A
d
d
 
e
d
g
e
s
 
t
o
 
s
e
e
 
l
i
s
t
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
W
i
d
t
h
:
 
2
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
&
&
 
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
i
d
 
|
|
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
i
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
&
&
 
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
i
d
 
|
|
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
i
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
0
.
2
5
s
,
 
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
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
 
t
e
x
t
-
x
s
"
>
→
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
d
j
[
i
d
]
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
∅
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
d
j
[
i
d
]
.
m
a
p
(
(
n
b
,
 
k
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
A
c
t
i
v
e
E
n
t
r
y
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
 
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
(
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
i
d
 
&
&
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
n
b
.
t
o
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
!
d
i
r
e
c
t
e
d
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
.
f
r
o
m
 
=
=
=
 
n
b
.
t
o
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
E
d
g
e
.
t
o
 
=
=
=
 
i
d
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
 
i
s
A
c
t
i
v
e
E
n
t
r
y
 
?
 
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
3
0
`
 
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
1
4
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
A
c
t
i
v
e
E
n
t
r
y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
i
s
A
c
t
i
v
e
E
n
t
r
y
 
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
 
"
t
r
a
n
s
p
a
r
e
n
t
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
0
.
2
5
s
,
 
c
o
l
o
r
 
0
.
2
5
s
,
 
b
o
r
d
e
r
-
c
o
l
o
r
 
0
.
2
5
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
b
.
t
o
}
{
n
b
.
w
 
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
 
?
 
`
:
$
{
n
b
.
w
}
`
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
S
p
a
c
e
:
 
O
(
V
+
E
)
.
 
E
d
g
e
 
c
h
e
c
k
:
 
O
(
d
e
g
(
v
)
)
.
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
 
e
a
c
h
 
e
d
g
e
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
W
h
a
t
 
i
s
 
a
 
g
r
a
p
h
?
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
A
 
g
r
a
p
h
 
G
 
=
 
(
V
,
 
E
)
 
i
s
 
a
 
p
a
i
r
:
 
V
 
i
s
 
a
 
s
e
t
 
o
f
 
v
e
r
t
i
c
e
s
 
(
n
o
d
e
s
)
,
 
E
 
i
s
 
a
 
s
e
t
 
o
f
 
e
d
g
e
s
 
(
c
o
n
n
e
c
t
i
o
n
s
 
b
e
t
w
e
e
n
 
p
a
i
r
s
 
o
f
 
v
e
r
t
i
c
e
s
)
.
 
E
d
g
e
s
 
c
a
n
 
b
e
 
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
,
 
w
e
i
g
h
t
e
d
 
o
r
 
u
n
w
e
i
g
h
t
e
d
.
"
,


 
 
 
 
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
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
A
n
 
n
×
n
 
b
o
o
l
e
a
n
 
o
r
 
i
n
t
e
g
e
r
 
m
a
t
r
i
x
 
M
 
w
h
e
r
e
 
M
[
u
]
[
v
]
 
=
 
1
 
(
o
r
 
w
e
i
g
h
t
)
 
i
f
 
e
d
g
e
 
u
→
v
 
e
x
i
s
t
s
.
 
S
p
a
c
e
 
O
(
V
²
)
.
 
C
h
e
c
k
i
n
g
 
'
i
s
 
t
h
e
r
e
 
a
n
 
e
d
g
e
?
'
 
i
s
 
O
(
1
)
,
 
b
u
t
 
i
t
e
r
a
t
i
n
g
 
n
e
i
g
h
b
o
r
s
 
o
f
 
v
 
t
a
k
e
s
 
O
(
V
)
.
"
,


 
 
 
 
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
A
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
 
v
e
r
t
e
x
 
s
t
o
r
e
s
 
a
 
l
i
s
t
 
o
f
 
i
t
s
 
n
e
i
g
h
b
o
r
s
.
 
S
p
a
c
e
 
O
(
V
 
+
 
E
)
,
 
m
u
c
h
 
s
m
a
l
l
e
r
 
f
o
r
 
s
p
a
r
s
e
 
g
r
a
p
h
s
.
 
I
t
e
r
a
t
i
n
g
 
n
e
i
g
h
b
o
r
s
 
i
s
 
O
(
d
e
g
(
v
)
)
.
 
C
h
e
c
k
i
n
g
 
a
 
s
p
e
c
i
f
i
c
 
e
d
g
e
 
i
s
 
O
(
d
e
g
(
v
)
)
.
 
B
F
S
/
D
F
S
 
l
o
v
e
 
t
h
i
s
 
l
a
y
o
u
t
.
"
,


 
 
 
 
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
e
n
 
t
o
 
u
s
e
 
w
h
i
c
h
?
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
D
e
n
s
e
 
g
r
a
p
h
 
(
|
E
|
 
≈
 
V
²
)
 
o
r
 
f
r
e
q
u
e
n
t
 
e
d
g
e
 
q
u
e
r
i
e
s
 
→
 
m
a
t
r
i
x
.
 
S
p
a
r
s
e
 
g
r
a
p
h
 
(
|
E
|
 
≪
 
V
²
)
 
o
r
 
t
r
a
v
e
r
s
a
l
-
h
e
a
v
y
 
→
 
l
i
s
t
.
 
R
e
a
l
-
w
o
r
l
d
 
g
r
a
p
h
s
 
(
s
o
c
i
a
l
,
 
w
e
b
,
 
r
o
a
d
)
 
a
r
e
 
s
p
a
r
s
e
,
 
l
i
s
t
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
T
w
o
 
l
a
y
o
u
t
s
.
 
S
a
m
e
 
g
r
a
p
h
.
 
W
i
l
d
l
y
 
d
i
f
f
e
r
e
n
t
 
s
p
e
e
d
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


 
 
 
 
 
 
 
 
 
 
A
 
g
r
a
p
h
 
i
s
 
t
h
e
 
m
o
s
t
 
g
e
n
e
r
a
l
 
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
 
i
n
 
C
S
.
 
T
r
e
e
s
 
a
r
e
 
g
r
a
p
h
s
,
 
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
s
 
a
r
e


 
 
 
 
 
 
 
 
 
 
g
r
a
p
h
s
,
 
t
h
e
 
r
o
a
d
 
n
e
t
w
o
r
k
 
i
s
 
a
 
g
r
a
p
h
,
 
t
h
e
 
i
n
t
e
r
n
e
t
 
i
s
 
a
 
g
r
a
p
h
.
 
H
o
w
 
y
o
u
 
r
e
p
r
e
s
e
n
t
 
i
t
 
i
n


 
 
 
 
 
 
 
 
 
 
m
e
m
o
r
y
 
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
 
w
h
e
t
h
e
r
 
a
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
 
r
u
n
s
 
i
n
 
O
(
V
+
E
)
 
o
r
 
O
(
V
²
)
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
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
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
e
p
r
e
s
e
n
t
a
t
i
o
n
"
,
 
"
S
p
a
c
e
"
,
 
"
E
d
g
e
 
c
h
e
c
k
"
,
 
"
I
t
e
r
a
t
e
 
n
e
i
g
h
b
o
r
s
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
4
 
p
y
-
3
 
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
e
p
:
 
"
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
"
,
 
s
p
a
c
e
:
 
"
O
(
V
²
)
"
,
 
e
d
g
e
:
 
"
O
(
1
)
"
,
 
n
b
:
 
"
O
(
V
)
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
r
e
p
:
 
"
A
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
"
,
 
s
p
a
c
e
:
 
"
O
(
V
 
+
 
E
)
"
,
 
e
d
g
e
:
 
"
O
(
d
e
g
(
v
)
)
"
,
 
n
b
:
 
"
O
(
d
e
g
(
v
)
)
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
,
 
i
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
i
 
=
=
=
 
0
 
?
 
"
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
}
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
4
 
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
r
.
r
e
p
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
4
 
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
s
p
a
c
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
4
 
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
e
d
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
4
 
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
n
b
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
 
q
:
 
"
G
r
a
p
h
 
h
a
s
 
5
 
v
e
r
t
i
c
e
s
.
 
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
u
s
e
s
 
h
o
w
 
m
u
c
h
 
s
p
a
c
e
 
(
c
e
l
l
s
)
?
"
,
 
a
:
 
"
2
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
G
r
a
p
h
 
w
i
t
h
 
V
=
6
,
 
E
=
8
 
a
s
 
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
.
 
T
o
t
a
l
 
s
p
a
c
e
 
o
r
d
e
r
 
(
V
 
+
 
2
E
 
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
)
?
"
,
 
a
:
 
"
2
2
"
 
}
,


 
 
 
 
{
 
q
:
 
"
G
i
v
e
n
 
e
d
g
e
s
 
A
-
B
,
 
B
-
C
,
 
A
-
C
,
 
h
o
w
 
m
a
n
y
 
r
o
w
s
 
i
n
 
t
h
e
 
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
 
a
:
 
"
3
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
s
t
r
i
n
g
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
 
"
"
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


 
 
 
 
 
 
 
 
W
o
r
k
 
e
a
c
h
 
o
u
t
 
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
 
S
p
a
c
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
 
m
a
t
t
e
r
s
 
i
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
 
c
o
r
r
e
c
t
 
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
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
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
.
<
/
s
p
a
n
>
 
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
c
e
n
t
e
r
"
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
w
-
2
4
 
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
l
i
m
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
5
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
n
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
4
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
C
o
r
r
e
c
t
:
 
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
W
h
y
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
 
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


 
 
 
 
 
 
 
 
 
 
B
F
S
/
D
F
S
 
o
n
 
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
 
r
u
n
 
i
n
 
O
(
V
+
E
)
.
 
O
n
 
a
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
t
h
e
y
 
r
u
n
 
i
n
 
O
(
V
²
)
 
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
 
h
o
w
 
f
e
w
 
e
d
g
e
s
 
e
x
i
s
t
,
 
t
h
e
 
m
a
t
r
i
x
 
f
o
r
c
e
s
 
y
o
u
 
t
o
 
s
c
a
n
 
a
 
w
h
o
l
e
 
r
o
w
 
f
o
r
 
e
a
c
h
 
v
e
r
t
e
x
.
 
F
o
r
 
a


 
 
 
 
 
 
 
 
 
 
s
o
c
i
a
l
 
g
r
a
p
h
 
w
i
t
h
 
a
 
b
i
l
l
i
o
n
 
u
s
e
r
s
 
a
n
d
 
o
n
l
y
 
a
 
f
e
w
 
h
u
n
d
r
e
d
 
f
r
i
e
n
d
s
 
e
a
c
h
,
 
t
h
a
t
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
d
i
f
f
e
r
e
n
c
e
 
b
e
t
w
e
e
n
 
s
e
c
o
n
d
s
 
a
n
d
 
y
e
a
r
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
 
q
u
i
c
k
 
r
e
f
e
r
e
n
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
M
a
t
r
i
x
:
 
s
p
a
c
e
 
O
(
V
²
)
,
 
a
d
d
-
e
d
g
e
 
O
(
1
)
,
 
h
a
s
-
e
d
g
e
 
O
(
1
)
,
 
n
e
i
g
h
b
o
r
s
 
O
(
V
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
L
i
s
t
:
 
s
p
a
c
e
 
O
(
V
+
E
)
,
 
a
d
d
-
e
d
g
e
 
O
(
1
)
,
 
h
a
s
-
e
d
g
e
 
O
(
d
e
g
)
,
 
n
e
i
g
h
b
o
r
s
 
O
(
d
e
g
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
F
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
 
g
r
a
p
h
s
 
e
a
c
h
 
e
d
g
e
 
a
p
p
e
a
r
s
 
t
w
i
c
e
 
i
n
 
t
h
e
 
l
i
s
t
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


 
 
 
 
 
 
 
 
 
 
 
 
H
a
n
d
s
h
a
k
i
n
g
 
l
e
m
m
a
:
 
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
Σ
 
d
e
g
(
v
)
 
=
 
2
|
E
|
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
G
r
a
p
h
R
e
p
r
e
s
e
n
t
a
t
i
o
n
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
W
h
i
c
h
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
 
u
s
e
s
 
Θ
(
V
²
)
 
s
p
a
c
e
 
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
 
e
d
g
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
A
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
"
,
 
"
E
d
g
e
 
l
i
s
t
"
,
 
"
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
"
,
 
"
I
n
c
i
d
e
n
c
e
 
m
a
t
r
i
x
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
A
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
i
s
 
f
i
x
e
d
 
V
×
V
 
c
e
l
l
s
.
 
E
v
e
n
 
a
 
g
r
a
p
h
 
w
i
t
h
 
0
 
e
d
g
e
s
 
s
t
i
l
l
 
u
s
e
s
 
V
²
 
c
e
l
l
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
F
o
r
 
a
 
s
p
a
r
s
e
 
g
r
a
p
h
 
w
i
t
h
 
V
=
1
0
⁴
 
a
n
d
 
E
=
2
·
1
0
⁴
,
 
w
h
i
c
h
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
 
i
s
 
m
o
r
e
 
m
e
m
o
r
y
-
e
f
f
i
c
i
e
n
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
M
a
t
r
i
x
 
(
f
a
s
t
e
r
 
a
n
y
w
a
y
)
"
,


 
 
 
 
 
 
 
 
"
L
i
s
t
 
-
 
O
(
V
+
E
)
 
≈
 
5
·
1
0
⁴
 
v
s
 
1
0
⁸
 
c
e
l
l
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
a
r
e
 
e
q
u
a
l
"
,


 
 
 
 
 
 
 
 
"
N
e
i
t
h
e
r
 
-
 
u
s
e
 
h
a
s
h
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
M
a
t
r
i
x
 
w
o
u
l
d
 
n
e
e
d
 
1
0
⁸
 
c
e
l
l
s
.
 
L
i
s
t
 
u
s
e
s
 
O
(
V
+
E
)
 
≈
 
3
·
1
0
⁴
 
e
n
t
r
i
e
s
.
 
H
u
g
e
 
d
i
f
f
e
r
e
n
c
e
 
f
o
r
 
s
p
a
r
s
e
 
g
r
a
p
h
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
I
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
 
h
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
 
e
n
t
r
i
e
s
 
a
c
r
o
s
s
 
a
l
l
 
l
i
s
t
s
 
d
o
e
s
 
a
n
 
e
d
g
e
 
{
u
,
v
}
 
c
r
e
a
t
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
1
"
,
 
"
2
"
,
 
"
V
"
,
 
"
d
e
g
(
u
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
T
h
e
 
e
d
g
e
 
a
p
p
e
a
r
s
 
i
n
 
u
'
s
 
l
i
s
t
 
(
p
o
i
n
t
i
n
g
 
t
o
 
v
)
 
a
n
d
 
i
n
 
v
'
s
 
l
i
s
t
 
(
p
o
i
n
t
i
n
g
 
t
o
 
u
)
.
 
H
e
n
c
e
 
Σ
 
d
e
g
 
=
 
2
|
E
|
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
 
o
p
e
r
a
t
i
o
n
 
i
s
 
O
(
1
)
 
o
n
 
a
n
 
a
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
b
u
t
 
O
(
d
e
g
(
v
)
)
 
o
n
 
a
n
 
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
I
t
e
r
a
t
e
 
a
l
l
 
n
e
i
g
h
b
o
r
s
 
o
f
 
v
"
,


 
 
 
 
 
 
 
 
"
C
h
e
c
k
 
w
h
e
t
h
e
r
 
e
d
g
e
 
(
u
,
v
)
 
e
x
i
s
t
s
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
a
 
n
e
w
 
v
e
r
t
e
x
"
,


 
 
 
 
 
 
 
 
"
C
o
u
n
t
 
t
o
t
a
l
 
e
d
g
e
s
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
M
[
u
]
[
v
]
 
i
s
 
a
 
d
i
r
e
c
t
 
l
o
o
k
u
p
,
 
c
o
n
s
t
a
n
t
 
t
i
m
e
.
 
I
n
 
a
 
l
i
s
t
 
y
o
u
 
m
u
s
t
 
s
c
a
n
 
u
'
s
 
n
e
i
g
h
b
o
r
 
l
i
s
t
 
t
o
 
c
o
n
f
i
r
m
 
v
 
i
s
 
t
h
e
r
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
G
r
a
p
h
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
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
1
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
i
g
h
,
 
e
v
e
r
y
 
g
r
a
p
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
r
t
s
 
h
e
r
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
B
r
e
a
d
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


