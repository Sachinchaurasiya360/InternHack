
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
s
o
r
t
i
n
g
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
 
 
L
o
c
a
l
 
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
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
s
o
r
t
e
d
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
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
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
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
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
 
 
L
o
c
a
l
 
A
r
r
a
y
B
a
r
s
 
c
o
m
p
o
n
e
n
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




c
o
n
s
t
 
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
S
:
 
R
e
c
o
r
d
<
C
e
l
l
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
b
o
r
d
e
r
,


 
 
c
o
m
p
a
r
e
:
 
"
#
0
6
b
6
d
4
"
,


 
 
s
w
a
p
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
,


 
 
s
o
r
t
e
d
:
 
"
#
a
3
e
6
3
5
"
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
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
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
,


 
 
d
o
n
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
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
 
A
r
r
a
y
B
a
r
s
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


 
 
p
o
i
n
t
e
r
s
,


 
 
h
e
i
g
h
t
 
=
 
1
6
0
,


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
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
;


 
 
h
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
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
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
2
4
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
4
8
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
 
|
|
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
;


 
 
c
o
n
s
t
 
t
o
t
a
l
W
 
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
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;




 
 
c
o
n
s
t
 
p
t
r
B
y
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
n
u
m
b
e
r
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
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
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
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
"
>


 
 
 
 
 
 
<
d
i
v
 
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
 
t
o
t
a
l
W
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
,
 
h
e
i
g
h
t
:
 
h
e
i
g
h
t
 
+
 
3
2
 
}
}
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
t
o
t
a
l
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
h
e
i
g
h
t
 
+
 
3
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
f
l
o
o
r
(
(
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
8
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
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
h
e
i
g
h
t
 
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
 
s
t
a
t
e
 
=
 
(
s
t
a
t
e
s
?
.
[
i
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
)
 
a
s
 
C
e
l
l
S
t
a
t
e
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
S
[
s
t
a
t
e
]
 
?
?
 
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
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
?
?
 
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
b
a
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
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
2
5
s
 
e
a
s
e
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
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
1
2
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
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
.
m
a
p
(
(
p
,
 
p
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
2
6
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
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
&
 
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
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
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
e
l
d
K
e
y
?
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


 
 
h
e
l
d
A
t
?
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
 
i
n
s
e
r
t
i
o
n
S
o
r
t
(
A
)
:
"
,


 
 
"
 
 
f
o
r
 
i
 
f
r
o
m
 
1
 
t
o
 
n
-
1
:
"
,


 
 
"
 
 
 
 
k
e
y
 
<
-
 
A
[
i
]
"
,


 
 
"
 
 
 
 
j
 
<
-
 
i
 
-
 
1
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
j
 
>
=
 
0
 
a
n
d
 
A
[
j
]
 
>
 
k
e
y
:
"
,


 
 
"
 
 
 
 
 
 
A
[
j
+
1
]
 
<
-
 
A
[
j
]
 
 
 
 
 
 
 
 
 
 
/
/
 
s
h
i
f
t
 
r
i
g
h
t
"
,


 
 
"
 
 
 
 
 
 
j
 
<
-
 
j
 
-
 
1
"
,


 
 
"
 
 
 
 
A
[
j
+
1
]
 
<
-
 
k
e
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
d
r
o
p
 
i
n
 
p
l
a
c
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
F
r
a
m
e
s
(
i
n
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
 
A
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
A
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


 
 
l
e
t
 
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
 
=
 
0
;


 
 
l
e
t
 
s
h
i
f
t
s
 
=
 
0
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
F
o
r
 
=
 
(
s
o
r
t
e
d
U
p
T
o
:
 
n
u
m
b
e
r
,
 
e
x
t
r
a
?
:
 
{
 
j
?
:
 
n
u
m
b
e
r
;
 
c
m
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
 
i
n
s
e
r
t
A
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
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
A
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
<
=
 
s
o
r
t
e
d
U
p
T
o
 
?
 
"
s
o
r
t
e
d
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
)
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
c
m
p
 
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
)
 
s
t
[
e
x
t
r
a
.
c
m
p
]
 
=
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
j
 
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
 
e
x
t
r
a
.
j
 
>
=
 
0
)
 
s
t
[
e
x
t
r
a
.
j
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
i
n
s
e
r
t
A
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
)
 
s
t
[
e
x
t
r
a
.
i
n
s
e
r
t
A
t
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


 
 
 
 
r
e
t
u
r
n
 
s
t
;


 
 
}
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
0
 
?
 
"
s
o
r
t
e
d
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
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,


 
 
 
 
p
o
i
n
t
e
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
t
a
r
t
i
n
g
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
 
[
$
{
A
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
 
A
[
0
]
 
a
l
o
n
e
 
i
s
 
t
r
i
v
i
a
l
l
y
 
s
o
r
t
e
d
.
`
,


 
 
 
 
h
e
l
d
K
e
y
:
 
n
u
l
l
,
 
h
e
l
d
A
t
:
 
n
u
l
l
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
 
1
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
 
k
e
y
 
=
 
A
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
 
i
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
c
m
p
:
 
i
 
}
)
,
 
p
o
i
n
t
e
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
O
u
t
e
r
 
s
t
e
p
 
i
 
=
 
$
{
i
}
.
 
C
o
n
s
i
d
e
r
 
e
l
e
m
e
n
t
 
A
[
$
{
i
}
]
 
=
 
$
{
k
e
y
}
.
`
,


 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
n
u
l
l
,
 
h
e
l
d
A
t
:
 
n
u
l
l
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
 
i
,
 
k
e
y
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
c
m
p
:
 
i
 
}
)
,
 
p
o
i
n
t
e
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
L
i
f
t
 
k
e
y
 
=
 
$
{
k
e
y
}
 
o
u
t
 
o
f
 
t
h
e
 
a
r
r
a
y
 
(
h
o
l
d
 
i
t
 
a
s
i
d
e
)
.
`
,


 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
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
k
e
y
"
,


 
 
 
 
}
)
;


 
 
 
 
l
e
t
 
j
 
=
 
i
 
-
 
1
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
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
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
j
 
=
 
$
{
j
}
 
-
 
s
c
a
n
 
l
e
f
t
 
w
h
i
l
e
 
s
o
r
t
e
d
 
e
l
e
m
e
n
t
s
 
a
r
e
 
b
i
g
g
e
r
 
t
h
a
n
 
k
e
y
.
`
,


 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
,


 
 
 
 
}
)
;




 
 
 
 
w
h
i
l
e
 
(
j
 
>
=
 
0
 
&
&
 
A
[
j
]
 
>
 
k
e
y
)
 
{


 
 
 
 
 
 
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
 
4
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
j
,
 
c
m
p
:
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
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
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
 
>
 
k
e
y
 
=
 
$
{
k
e
y
}
 
-
 
m
u
s
t
 
s
h
i
f
t
 
A
[
$
{
j
}
]
 
r
i
g
h
t
.
`
,


 
 
 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
A
[
j
 
+
 
1
]
 
=
 
A
[
j
]
;


 
 
 
 
 
 
s
h
i
f
t
s
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
 
5
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
j
,
 
"
j
+
1
"
:
 
j
 
+
 
1
 
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
h
i
f
t
:
 
A
[
$
{
j
 
+
 
1
}
]
 
<
-
 
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
.
 
A
r
r
a
y
 
n
o
w
 
[
$
{
A
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


 
 
 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
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
h
i
f
t
s
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
j
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
 
6
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
j
:
 
M
a
t
h
.
m
a
x
(
j
,
 
-
1
)
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
j
 
>
=
 
0
 
?
 
{
 
j
 
}
 
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
j
 
<
-
 
$
{
j
}
`
,


 
 
 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
i
f
 
(
j
 
>
=
 
0
)
 
{


 
 
 
 
 
 
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
 
4
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
 
-
 
1
,
 
{
 
j
,
 
c
m
p
:
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
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
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
 
<
=
 
k
e
y
 
=
 
$
{
k
e
y
}
 
-
 
s
t
o
p
 
s
h
i
f
t
i
n
g
.
`
,


 
 
 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
k
e
y
,
 
h
e
l
d
A
t
:
 
i
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
A
[
j
 
+
 
1
]
 
=
 
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
 
n
,
 
i
,
 
k
e
y
,
 
j
,
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
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
F
o
r
(
i
,
 
{
 
i
n
s
e
r
t
A
t
:
 
j
 
+
 
1
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
n
s
e
r
t
:
 
j
 
+
 
1
 
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
r
o
p
 
k
e
y
 
=
 
$
{
k
e
y
}
 
a
t
 
i
n
d
e
x
 
$
{
j
 
+
 
1
}
.
 
S
o
r
t
e
d
 
p
r
e
f
i
x
 
n
o
w
 
A
[
0
.
.
$
{
i
}
]
.
`
,


 
 
 
 
 
 
h
e
l
d
K
e
y
:
 
n
u
l
l
,
 
h
e
l
d
A
t
:
 
n
u
l
l
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
k
e
y
"
,


 
 
 
 
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
,
 
s
h
i
f
t
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
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
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
D
o
n
e
.
 
S
o
r
t
e
d
:
 
[
$
{
A
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


 
 
 
 
h
e
l
d
K
e
y
:
 
n
u
l
l
,
 
h
e
l
d
A
t
:
 
n
u
l
l
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
A
r
r
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
 
n
u
m
s
 
=
 
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
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
n
)
 
=
>
 
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
n
)
)
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


 
 
i
f
 
(
n
u
m
s
.
l
e
n
g
t
h
 
<
 
2
 
|
|
 
n
u
m
s
.
l
e
n
g
t
h
 
>
 
1
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


 
 
r
e
t
u
r
n
 
n
u
m
s
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
l
o
a
t
i
n
g
 
k
e
y
 
d
i
s
p
l
a
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
F
l
o
a
t
i
n
g
K
e
y
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
 
}
)
 
{


 
 
i
f
 
(
!
f
r
a
m
e
 
|
|
 
f
r
a
m
e
.
h
e
l
d
K
e
y
 
=
=
=
 
n
u
l
l
 
|
|
 
f
r
a
m
e
.
h
e
l
d
K
e
y
 
=
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
)
 
{


 
 
 
 
r
e
t
u
r
n
 
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
h
-
8
"
 
/
>
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
2
 
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
-
2
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
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
3
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
 
s
e
l
f
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
k
e
y
 
=
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
>
{
f
r
a
m
e
.
h
e
l
d
K
e
y
}
<
/
s
p
a
n
>


 
 
 
 
 
 
{
f
r
a
m
e
.
h
e
l
d
A
t
 
!
=
=
 
n
u
l
l
 
&
&
 
f
r
a
m
e
.
h
e
l
d
A
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
(
f
r
o
m
 
i
=
{
f
r
a
m
e
.
h
e
l
d
A
t
}
)
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
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
3
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
A
r
r
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
 
?
?
 
[
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
3
]
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
p
a
r
s
e
d
)
,
 
[
p
a
r
s
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
I
n
s
e
r
t
i
o
n
 
S
o
r
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
 
(
2
-
1
2
 
n
u
m
b
e
r
s
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
 
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
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
T
r
y
 
t
h
e
 
'
N
e
a
r
l
y
 
s
o
r
t
e
d
'
 
p
r
e
s
e
t
 
t
o
 
s
e
e
 
t
h
e
 
a
d
a
p
t
i
v
e
 
O
(
n
)
 
b
e
h
a
v
i
o
r
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
R
a
n
d
o
m
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
 
2
,
 
4
,
 
6
,
 
1
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
S
o
r
t
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
R
e
v
e
r
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
6
,
 
5
,
 
4
,
 
3
,
 
2
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
N
e
a
r
l
y
 
s
o
r
t
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
1
,
 
2
,
 
3
,
 
5
,
 
4
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
u
p
l
i
c
a
t
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
3
,
 
1
,
 
3
,
 
2
,
 
1
,
 
2
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
A
r
r
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
 
5
 
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
 
a
r
r
 
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
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
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
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
 
g
a
p
-
3
 
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
F
l
o
a
t
i
n
g
K
e
y
 
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
?
.
v
a
l
u
e
s
 
?
?
 
p
a
r
s
e
d
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
?
.
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
8
0
}


 
 
 
 
 
 
 
 
/
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
t
e
p
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
L
i
f
t
"
,
 
b
:
 
"
T
a
k
e
 
A
[
i
]
 
o
u
t
 
a
s
 
'
k
e
y
'
,
 
i
m
a
g
i
n
e
 
l
i
f
t
i
n
g
 
i
t
 
a
b
o
v
e
 
t
h
e
 
r
o
w
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
S
c
a
n
 
&
 
s
h
i
f
t
"
,
 
b
:
 
"
W
a
l
k
 
b
a
c
k
w
a
r
d
 
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
 
s
o
r
t
e
d
 
p
r
e
f
i
x
,
 
s
h
i
f
t
i
n
g
 
a
n
y
t
h
i
n
g
 
l
a
r
g
e
r
 
t
h
a
n
 
k
e
y
 
o
n
e
 
s
l
o
t
 
r
i
g
h
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
D
r
o
p
"
,
 
b
:
 
"
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
 
v
a
l
u
e
 
<
=
 
k
e
y
 
(
o
r
 
t
h
e
 
s
t
a
r
t
)
,
 
d
r
o
p
 
k
e
y
 
i
n
t
o
 
t
h
e
 
g
a
p
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
G
r
o
w
 
t
h
e
 
p
r
e
f
i
x
"
,
 
b
:
 
"
A
[
0
.
.
i
]
 
i
s
 
n
o
w
 
s
o
r
t
e
d
.
 
M
o
v
e
 
t
o
 
i
+
1
 
a
n
d
 
r
e
p
e
a
t
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
T
h
e
 
p
l
a
y
i
n
g
-
c
a
r
d
s
 
s
o
r
t
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
l
o
t
 
e
a
c
h
 
n
e
w
 
e
l
e
m
e
n
t
 
i
n
t
o
 
a
 
s
o
r
t
e
d
 
p
r
e
f
i
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


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
s
o
r
t
i
n
g
 
a
 
h
a
n
d
 
o
f
 
p
l
a
y
i
n
g
 
c
a
r
d
s
:
 
p
i
c
k
 
e
a
c
h
 
n
e
w
 
c
a
r
d
 
f
r
o
m
 
t
h
e
 
t
a
b
l
e
 
a
n
d
 
s
l
o
t
 
i
t


 
 
 
 
 
 
 
 
 
 
i
n
t
o
 
t
h
e
 
c
o
r
r
e
c
t
 
p
o
s
i
t
i
o
n
 
a
m
o
n
g
 
t
h
e
 
c
a
r
d
s
 
a
l
r
e
a
d
y
 
i
n
 
y
o
u
r
 
h
a
n
d
.
 
T
h
a
t
 
i
s
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
,


 
 
 
 
 
 
 
 
 
 
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
 
a
t
 
a
 
t
i
m
e
,
 
a
l
w
a
y
s
 
i
n
t
o
 
a
 
s
o
r
t
e
d
 
p
r
e
f
i
x
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
t
e
p
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
 
m
b
-
1
 
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
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
W
h
y
 
i
t
 
i
s
 
l
o
v
e
d
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
 
f
a
s
t
e
s
t
 
p
r
a
c
t
i
c
a
l
 
s
o
r
t
 
f
o
r
 
s
m
a
l
l
 
n
 
a
n
d
 
n
e
a
r
l
y
-
s
o
r
t
e
d


 
 
 
 
 
 
 
 
i
n
p
u
t
,
 
O
(
n
)
 
b
e
s
t
 
c
a
s
e
.
 
R
e
a
l
 
l
i
b
r
a
r
i
e
s
 
s
w
i
t
c
h
 
t
o
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
c
e
 
a
 
q
u
i
c
k
s
o
r
t
 
p
a
r
t
i
t
i
o
n


 
 
 
 
 
 
 
 
s
h
r
i
n
k
s
 
b
e
l
o
w
 
a
b
o
u
t
 
1
6
 
e
l
e
m
e
n
t
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
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
 
[
3
,
 
1
,
 
2
]
:
 
t
o
t
a
l
 
s
h
i
f
t
s
?
"
,
 
a
n
s
w
e
r
:
 
"
2
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
 
a
l
r
e
a
d
y
-
s
o
r
t
e
d
 
[
1
,
 
2
,
 
3
,
 
4
]
:
 
t
o
t
a
l
 
s
h
i
f
t
s
?
"
,
 
a
n
s
w
e
r
:
 
"
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
 
r
e
v
e
r
s
e
 
[
4
,
 
3
,
 
2
,
 
1
]
:
 
t
o
t
a
l
 
s
h
i
f
t
s
?
"
,
 
a
n
s
w
e
r
:
 
"
6
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
E
a
c
h
 
s
h
i
f
t
 
=
 
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
 
m
o
v
e
s
 
o
n
e
 
s
l
o
t
 
t
o
 
t
h
e
 
r
i
g
h
t
.
 
C
o
u
n
t
 
t
h
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
t
e
x
t
-
s
m
 
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
5
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
4
 
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
?
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
m
e
d
i
u
m
 
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
3
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
 
-
 
$
{
p
.
a
n
s
w
e
r
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
n
s
w
e
r
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
A
d
a
p
t
i
v
e
 
=
 
O
(
n
)
 
b
e
s
t
 
c
a
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
"
>


 
 
 
 
 
 
 
 
 
 
O
n
 
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
,
 
e
v
e
r
y
 
i
n
n
e
r
 
w
h
i
l
e
-
c
h
e
c
k
 
f
a
i
l
s
 
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
,
 
z
e
r
o
 
s
h
i
f
t
s
,
 
j
u
s
t
 
o
n
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
 
p
e
r
 
o
u
t
e
r
 
s
t
e
p
.
 
T
h
a
t
 
i
s
 
O
(
n
)
.
 
O
n
 
r
e
v
e
r
s
e
-
s
o
r
t
e
d
 
i
n
p
u
t
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
 
s
h
i
f
t
s


 
 
 
 
 
 
 
 
 
 
a
l
l
 
t
h
e
 
w
a
y
 
b
a
c
k
,
 
O
(
n
²
)
.
 
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
r
e
w
a
r
d
s
 
a
l
r
e
a
d
y
-
m
o
s
t
l
y
-
s
o
r
t
e
d
 
d
a
t
a
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
v
e
r
s
i
o
n
s
 
a
n
d
 
w
h
y
 
t
h
e
y
 
m
a
t
t
e
r
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
 
i
n
v
e
r
s
i
o
n
 
i
s
 
a
 
p
a
i
r
 
(
i
,
 
j
)
 
w
i
t
h
 
i
 
&
l
t
;
 
j
 
b
u
t
 
A
[
i
]
 
&
g
t
;
 
A
[
j
]
.
 
I
n
s
e
r
t
i
o
n
 
s
o
r
t
'
s
 
s
h
i
f
t


 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
 
e
q
u
a
l
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
 
i
n
v
e
r
s
i
o
n
s
 
e
x
a
c
t
l
y
.
 
C
o
u
n
t
i
n
g
 
i
n
v
e
r
s
i
o
n
s
 
i
s
 
i
t
s
e
l
f
 
a
 
c
l
a
s
s
i
c


 
 
 
 
 
 
 
 
 
 
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
 
(
s
o
l
v
a
b
l
e
 
v
i
a
 
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
 
h
o
o
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
B
e
s
t
 
c
a
s
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
s
:
 
n
-
1
.
 
W
o
r
s
t
 
c
a
s
e
:
 
n
(
n
-
1
)
/
2
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
S
t
a
b
l
e
,
 
i
n
-
p
l
a
c
e
,
 
a
d
a
p
t
i
v
e
:
 
t
h
r
e
e
 
p
r
o
p
e
r
t
i
e
s
 
w
o
r
t
h
 
m
e
m
o
r
i
z
i
n
g
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
i
n
a
r
y
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
u
s
e
s
 
b
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
 
t
o
 
f
i
n
d
 
t
h
e
 
s
l
o
t
:
 
O
(
n
 
l
o
g
 
n
)
 
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
,
 
s
t
i
l
l


 
 
 
 
 
 
 
 
 
 
 
 
O
(
n
²
)
 
s
h
i
f
t
s
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
5
_
I
n
s
e
r
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
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
o
n
 
[
4
,
 
3
,
 
2
,
 
1
]
 
-
 
t
o
t
a
l
 
n
u
m
b
e
r
 
o
f
 
s
h
i
f
t
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
3
"
,
 
"
4
"
,
 
"
6
"
,
 
"
1
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
i
=
1
:
 
1
 
s
h
i
f
t
.
 
i
=
2
:
 
2
 
s
h
i
f
t
s
.
 
i
=
3
:
 
3
 
s
h
i
f
t
s
.
 
T
o
t
a
l
 
=
 
1
+
2
+
3
 
=
 
6
 
(
=
 
n
(
n
-
1
)
/
2
 
f
o
r
 
r
e
v
e
r
s
e
 
i
n
p
u
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
W
h
i
c
h
 
i
n
p
u
t
 
m
a
k
e
s
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
r
u
n
 
i
n
 
O
(
n
)
 
t
i
m
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
R
e
v
e
r
s
e
-
s
o
r
t
e
d
"
,
 
"
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
A
l
l
 
e
l
e
m
e
n
t
s
 
e
q
u
a
l
 
a
n
d
 
r
e
v
e
r
s
e
-
s
o
r
t
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
S
o
r
t
e
d
 
i
n
p
u
t
 
t
r
i
g
g
e
r
s
 
t
h
e
 
e
a
r
l
y
 
e
x
i
t
 
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
 
w
h
i
l
e
 
l
o
o
p
 
e
v
e
r
y
 
i
t
e
r
a
t
i
o
n
:
 
o
n
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
 
p
e
r
 
e
l
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
s
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
s
t
a
b
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
Y
e
s
"
,


 
 
 
 
 
 
 
 
"
N
o
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
i
f
 
i
n
p
u
t
 
h
a
s
 
n
o
 
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
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
o
n
 
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
T
h
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
 
i
s
 
s
t
r
i
c
t
l
y
 
'
A
[
j
]
 
>
 
k
e
y
'
,
 
s
o
 
e
q
u
a
l
 
e
l
e
m
e
n
t
s
 
n
e
v
e
r
 
s
w
a
p
,
 
p
r
e
s
e
r
v
i
n
g
 
r
e
l
a
t
i
v
e
 
o
r
d
e
r
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
N
u
m
b
e
r
 
o
f
 
s
h
i
f
t
s
 
p
e
r
f
o
r
m
e
d
 
b
y
 
i
n
s
e
r
t
i
o
n
 
s
o
r
t
 
e
q
u
a
l
s
:
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
N
u
m
b
e
r
 
o
f
 
s
w
a
p
s
 
i
n
 
b
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
N
u
m
b
e
r
 
o
f
 
i
n
v
e
r
s
i
o
n
s
 
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
"
,


 
 
 
 
 
 
 
 
"
n
 
l
o
g
 
n
"
,


 
 
 
 
 
 
 
 
"
A
l
w
a
y
s
 
n
-
1
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
E
a
c
h
 
i
n
v
e
r
s
i
o
n
,
 
a
 
p
a
i
r
 
(
i
,
 
j
)
 
w
i
t
h
 
i
<
j
 
a
n
d
 
A
[
i
]
>
A
[
j
]
,
 
c
a
u
s
e
s
 
e
x
a
c
t
l
y
 
o
n
e
 
s
h
i
f
t
 
d
u
r
i
n
g
 
s
o
r
t
i
n
g
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
s
e
r
t
i
o
n
 
S
o
r
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
a
r
e
l
y
 
a
s
k
e
d
 
d
i
r
e
c
t
l
y
;
 
u
s
e
d
 
a
s
 
s
u
b
r
o
u
t
i
n
e
 
i
n
 
h
y
b
r
i
d
 
s
o
r
t
s
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
M
e
r
g
e
 
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


