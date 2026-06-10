
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
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
c
t
i
v
i
t
y
,


 
 
C
i
r
c
l
e
D
o
t
,


 
 
F
l
a
m
e
,


 
 
H
a
s
h
,


 
 
P
l
u
s
,


 
 
R
o
t
a
t
e
C
c
w
,


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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
M
U
T
E
D
 
=
 
"
#
4
7
5
5
6
9
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
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
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
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
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
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
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
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
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
H
a
s
h
 
r
i
n
g
 
w
i
t
h
 
c
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




/
/
 
2
4
 
l
o
g
i
c
a
l
 
k
e
y
s
 
s
p
r
e
a
d
 
e
v
e
n
l
y
 
a
r
o
u
n
d
 
t
h
e
 
r
i
n
g


c
o
n
s
t
 
K
E
Y
S
 
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
 
2
4
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
{


 
 
i
d
:
 
`
k
$
{
i
 
+
 
1
}
`
,


 
 
/
/
 
a
n
g
l
e
 
i
n
 
d
e
g
r
e
e
s
,
 
e
v
e
n
l
y
 
s
p
a
c
e
d
 
w
i
t
h
 
a
 
s
m
a
l
l
 
j
i
t
t
e
r
 
s
o
 
i
t
 
l
o
o
k
s
 
o
r
g
a
n
i
c


 
 
a
n
g
l
e
:
 
(
i
 
*
 
3
6
0
)
 
/
 
2
4
 
+
 
(
(
i
 
*
 
7
)
 
%
 
1
1
)
 
-
 
5
,


}
)
)
;




c
o
n
s
t
 
S
H
A
R
D
_
P
A
L
E
T
T
E
 
=
 
[
S
D
,
 
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
#
0
6
b
6
d
4
"
,
 
"
#
8
b
5
c
f
6
"
,
 
"
#
e
c
4
8
9
9
"
]
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
 
S
h
a
r
d
 
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


 
 
/
*
*
 
a
n
g
l
e
 
i
n
 
d
e
g
r
e
e
s
 
o
n
 
t
h
e
 
h
a
s
h
 
r
i
n
g
 
(
0
-
3
6
0
)
 
*
/


 
 
a
n
g
l
e
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
I
N
I
T
I
A
L
_
S
H
A
R
D
S
:
 
S
h
a
r
d
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
s
h
a
r
d
-
A
"
,
 
a
n
g
l
e
:
 
3
0
 
}
,


 
 
{
 
i
d
:
 
"
s
h
a
r
d
-
B
"
,
 
a
n
g
l
e
:
 
1
5
0
 
}
,


 
 
{
 
i
d
:
 
"
s
h
a
r
d
-
C
"
,
 
a
n
g
l
e
:
 
2
7
0
 
}
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
 
H
a
s
h
R
i
n
g
(
)
 
{


 
 
c
o
n
s
t
 
[
s
h
a
r
d
s
,
 
s
e
t
S
h
a
r
d
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
S
h
a
r
d
[
]
>
(
I
N
I
T
I
A
L
_
S
H
A
R
D
S
)
;


 
 
c
o
n
s
t
 
[
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
,
 
s
e
t
H
i
g
h
l
i
g
h
t
S
h
a
r
d
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
<
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
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
a
d
d
S
h
a
r
d
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
h
a
r
d
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
 
6
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
t
a
k
e
n
 
=
 
n
e
w
 
S
e
t
(
s
h
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
)
 
=
>
 
s
.
i
d
)
)
;


 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
 
=
 
[
"
s
h
a
r
d
-
A
"
,
 
"
s
h
a
r
d
-
B
"
,
 
"
s
h
a
r
d
-
C
"
,
 
"
s
h
a
r
d
-
D
"
,
 
"
s
h
a
r
d
-
E
"
,
 
"
s
h
a
r
d
-
F
"
]
.
f
i
n
d
(
(
x
)
 
=
>
 
!
t
a
k
e
n
.
h
a
s
(
x
)
)
!
;


 
 
 
 
/
/
 
D
r
o
p
 
t
h
e
 
n
e
w
 
s
h
a
r
d
 
a
t
 
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
 
g
a
p
 
s
o
 
t
h
e
 
r
e
b
a
l
a
n
c
e
 
i
s
 
v
i
s
u
a
l
l
y
 
m
e
a
n
i
n
g
f
u
l


 
 
 
 
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
s
h
a
r
d
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
a
n
g
l
e
 
-
 
b
.
a
n
g
l
e
)
;


 
 
 
 
l
e
t
 
b
e
s
t
G
a
p
 
=
 
0
;


 
 
 
 
l
e
t
 
b
e
s
t
A
n
g
l
e
 
=
 
0
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
o
r
t
e
d
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


 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
s
o
r
t
e
d
[
i
]
.
a
n
g
l
e
;


 
 
 
 
 
 
c
o
n
s
t
 
b
 
=
 
i
 
=
=
=
 
s
o
r
t
e
d
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
 
s
o
r
t
e
d
[
0
]
.
a
n
g
l
e
 
+
 
3
6
0
 
:
 
s
o
r
t
e
d
[
i
 
+
 
1
]
.
a
n
g
l
e
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
 
b
 
-
 
a
;


 
 
 
 
 
 
i
f
 
(
g
a
p
 
>
 
b
e
s
t
G
a
p
)
 
{


 
 
 
 
 
 
 
 
b
e
s
t
G
a
p
 
=
 
g
a
p
;


 
 
 
 
 
 
 
 
b
e
s
t
A
n
g
l
e
 
=
 
(
a
 
+
 
g
a
p
 
/
 
2
)
 
%
 
3
6
0
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
s
e
t
S
h
a
r
d
s
(
[
.
.
.
s
h
a
r
d
s
,
 
{
 
i
d
:
 
n
e
w
I
d
,
 
a
n
g
l
e
:
 
b
e
s
t
A
n
g
l
e
 
}
]
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
h
a
r
d
s
(
I
N
I
T
I
A
L
_
S
H
A
R
D
S
)
;


 
 
 
 
s
e
t
H
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
(
n
u
l
l
)
;


 
 
}
;




 
 
/
/
 
M
a
p
 
e
a
c
h
 
k
e
y
 
t
o
 
t
h
e
 
n
e
x
t
 
s
h
a
r
d
 
c
l
o
c
k
w
i
s
e
 
(
c
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
)


 
 
c
o
n
s
t
 
k
e
y
A
s
s
i
g
n
m
e
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
s
h
a
r
d
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
a
n
g
l
e
 
-
 
b
.
a
n
g
l
e
)
;


 
 
 
 
r
e
t
u
r
n
 
K
E
Y
S
.
m
a
p
(
(
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
 
n
e
x
t
 
=


 
 
 
 
 
 
 
 
s
o
r
t
e
d
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
a
n
g
l
e
 
>
=
 
k
.
a
n
g
l
e
)
 
?
?
 
s
o
r
t
e
d
[
0
]
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
k
e
y
I
d
:
 
k
.
i
d
,
 
s
h
a
r
d
I
d
:
 
n
e
x
t
.
i
d
 
}
;


 
 
 
 
}
)
;


 
 
}
,
 
[
s
h
a
r
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
 
c
o
u
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


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
a
 
o
f
 
k
e
y
A
s
s
i
g
n
m
e
n
t
s
)
 
{


 
 
 
 
 
 
o
u
t
[
a
.
s
h
a
r
d
I
d
]
 
=
 
(
o
u
t
[
a
.
s
h
a
r
d
I
d
]
 
?
?
 
0
)
 
+
 
1
;


 
 
 
 
}


 
 
 
 
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
,
 
[
k
e
y
A
s
s
i
g
n
m
e
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
 
c
o
l
o
r
F
o
r
 
=
 
(
i
d
:
 
s
t
r
i
n
g
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
d
x
 
=
 
[
"
s
h
a
r
d
-
A
"
,
 
"
s
h
a
r
d
-
B
"
,
 
"
s
h
a
r
d
-
C
"
,
 
"
s
h
a
r
d
-
D
"
,
 
"
s
h
a
r
d
-
E
"
,
 
"
s
h
a
r
d
-
F
"
]
.
i
n
d
e
x
O
f
(
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
 
S
H
A
R
D
_
P
A
L
E
T
T
E
[
i
d
x
 
%
 
S
H
A
R
D
_
P
A
L
E
T
T
E
.
l
e
n
g
t
h
]
;


 
 
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
C
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
o
n
 
a
 
r
i
n
g
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
H
a
s
h
 
e
v
e
r
y
 
k
e
y
 
t
o
 
a
 
p
o
i
n
t
 
o
n
 
a
 
c
i
r
c
l
e
.
 
H
a
s
h
 
e
v
e
r
y
 
s
h
a
r
d
 
t
o
 
a
 
p
o
i
n
t
 
t
o
o
.
 
A
 
k
e
y
 
b
e
l
o
n
g
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
 
s
h
a
r
d
 
c
l
o
c
k
w
i
s
e
.
 
A
d
d
 
a
 
s
h
a
r
d
,
 
w
a
t
c
h
 
o
n
l
y
 
t
h
e
 
k
e
y
s
 
i
n
 
<
i
>
t
h
a
t
 
a
r
c
<
/
i
>
 
m
o
v
e
.
 
T
h
a
t
&
r
s
q
u
o
;
s


 
 
 
 
 
 
 
 
w
h
y
 
t
h
i
s
 
s
c
h
e
m
e
 
i
s
 
c
a
l
l
e
d
 
&
l
d
q
u
o
;
c
o
n
s
i
s
t
e
n
t
.
&
r
d
q
u
o
;


 
 
 
 
 
 
<
/
p
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
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
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
[
1
f
r
_
2
4
0
p
x
]
 
g
a
p
-
6
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
a
r
d
s
=
{
s
h
a
r
d
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
A
s
s
i
g
n
m
e
n
t
s
=
{
k
e
y
A
s
s
i
g
n
m
e
n
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
F
o
r
=
{
c
o
l
o
r
F
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
=
{
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
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
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
8
 
}
}
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
"
#
9
4
a
3
b
8
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
a
r
d
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
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
o
l
o
r
F
o
r
(
s
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
m
o
t
i
o
n
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
E
n
t
e
r
=
{
(
)
 
=
>
 
s
e
t
H
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
(
s
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
L
e
a
v
e
=
{
(
)
 
=
>
 
s
e
t
H
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
(
n
u
l
l
)
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
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
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
c
}
5
5
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
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
 
=
=
=
 
s
.
i
d
 
?
 
`
$
{
c
}
2
2
`
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
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
l
e
f
t
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
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
l
e
D
o
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
3
.
5
 
h
-
3
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
 
c
o
l
o
r
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
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
8
r
e
m
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
 
"
#
e
5
e
7
e
b
"
,
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
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
F
a
m
i
l
y
:
 
M
O
N
O
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
2
r
e
m
"
,
 
c
o
l
o
r
:
 
c
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
u
n
t
s
[
s
.
i
d
]
 
?
?
 
0
}
 
k
e
y
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
a
d
d
S
h
a
r
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
h
a
r
d
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
 
6
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
s
h
a
r
d
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
 
6
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
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
.
5
p
x
 
s
o
l
i
d
 
$
{
s
h
a
r
d
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
 
6
 
?
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
 
:
 
S
D
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
 
s
h
a
r
d
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
 
6
 
?
 
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
 
:
 
`
$
{
S
D
}
1
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
h
a
r
d
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
 
6
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
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
 
M
O
N
O
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
c
l
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
d
d
 
s
h
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
r
e
s
e
t
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
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
 
"
1
.
5
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
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
 
M
O
N
O
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
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


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
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
r
g
i
n
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
W
H
Y
 
T
H
I
S
 
M
A
T
T
E
R
S


 
 
 
 
 
 
 
 
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
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
N
a
i
v
e
 
s
h
a
r
d
i
n
g
 
h
a
s
h
e
s
 
a
 
k
e
y
 
w
i
t
h
 
<
c
o
d
e
 
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
F
a
m
i
l
y
:
 
M
O
N
O
 
}
}
>
k
e
y
 
%
 
n
<
/
c
o
d
e
>
.
 
A
d
d
i
n
g


 
 
 
 
 
 
 
 
 
 
o
n
e
 
s
h
a
r
d
 
c
h
a
n
g
e
s
 
<
c
o
d
e
 
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
F
a
m
i
l
y
:
 
M
O
N
O
 
}
}
>
n
<
/
c
o
d
e
>
,
 
w
h
i
c
h
 
m
o
v
e
s
 
<
i
>
a
l
m
o
s
t


 
 
 
 
 
 
 
 
 
 
e
v
e
r
y
<
/
i
>
 
k
e
y
.
 
C
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
o
n
l
y
 
m
o
v
e
s
 
t
h
e
 
k
e
y
s
 
i
n
 
t
h
e
 
n
e
w
 
s
h
a
r
d
&
r
s
q
u
o
;
s
 
a
r
c
,
 
s
o


 
 
 
 
 
 
 
 
 
 
r
e
b
a
l
a
n
c
i
n
g
 
i
s
 
c
h
e
a
p
 
a
n
d
 
o
n
l
i
n
e
.


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
(
{


 
 
s
h
a
r
d
s
,


 
 
k
e
y
A
s
s
i
g
n
m
e
n
t
s
,


 
 
c
o
l
o
r
F
o
r
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
S
h
a
r
d
I
d
,


}
:
 
{


 
 
s
h
a
r
d
s
:
 
S
h
a
r
d
[
]
;


 
 
k
e
y
A
s
s
i
g
n
m
e
n
t
s
:
 
{
 
k
e
y
I
d
:
 
s
t
r
i
n
g
;
 
s
h
a
r
d
I
d
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
;


 
 
c
o
l
o
r
F
o
r
:
 
(
i
d
:
 
s
t
r
i
n
g
)
 
=
>
 
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
S
h
a
r
d
I
d
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
;


}
)
 
{


 
 
c
o
n
s
t
 
c
x
 
=
 
2
0
0
;


 
 
c
o
n
s
t
 
c
y
 
=
 
2
0
0
;


 
 
c
o
n
s
t
 
r
 
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
 
p
o
l
a
r
 
=
 
(
a
n
g
l
e
:
 
n
u
m
b
e
r
,
 
r
a
d
i
u
s
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
 
{


 
 
 
 
c
o
n
s
t
 
r
a
d
 
=
 
(
(
a
n
g
l
e
 
-
 
9
0
)
 
*
 
M
a
t
h
.
P
I
)
 
/
 
1
8
0
;


 
 
 
 
r
e
t
u
r
n
 
{
 
x
:
 
c
x
 
+
 
r
a
d
i
u
s
 
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
r
a
d
)
,
 
y
:
 
c
y
 
+
 
r
a
d
i
u
s
 
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
r
a
d
)
 
}
;


 
 
}
;




 
 
/
/
 
S
o
r
t
 
s
h
a
r
d
s
 
c
l
o
c
k
w
i
s
e
 
s
o
 
w
e
 
c
a
n
 
d
r
a
w
 
a
r
c
s


 
 
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
s
h
a
r
d
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
a
n
g
l
e
 
-
 
b
.
a
n
g
l
e
)
;


 
 
c
o
n
s
t
 
a
r
c
s
 
=
 
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
s
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
 
n
e
x
t
 
=
 
s
o
r
t
e
d
[
(
i
 
+
 
1
)
 
%
 
s
o
r
t
e
d
.
l
e
n
g
t
h
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
r
t
 
=
 
s
.
a
n
g
l
e
;


 
 
 
 
c
o
n
s
t
 
e
n
d
 
=
 
n
e
x
t
.
a
n
g
l
e
 
<
=
 
s
.
a
n
g
l
e
 
?
 
n
e
x
t
.
a
n
g
l
e
 
+
 
3
6
0
 
:
 
n
e
x
t
.
a
n
g
l
e
;


 
 
 
 
r
e
t
u
r
n
 
{
 
i
d
:
 
s
.
i
d
,
 
s
t
a
r
t
,
 
e
n
d
 
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
"
0
 
0
 
4
0
0
 
4
0
0
"
 
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
W
i
d
t
h
:
 
3
8
0
 
}
}
>


 
 
 
 
 
 
{
/
*
 
a
r
c
 
s
e
g
m
e
n
t
s
 
p
e
r
 
s
h
a
r
d
,
 
c
o
l
o
r
e
d
 
f
a
i
n
t
l
y
 
*
/
}


 
 
 
 
 
 
{
a
r
c
s
.
m
a
p
(
(
a
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
o
l
o
r
F
o
r
(
a
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
 
o
p
a
c
i
t
y
 
=
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
 
=
=
=
 
n
u
l
l
 
|
|
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
 
=
=
=
 
a
.
i
d
 
?
 
0
.
1
8
 
:
 
0
.
0
4
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
p
a
t
h


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
d
e
s
c
r
i
b
e
A
r
c
(
c
x
,
 
c
y
,
 
r
,
 
a
.
s
t
a
r
t
,
 
a
.
e
n
d
)
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
{
/
*
 
b
a
s
e
 
r
i
n
g
 
*
/
}


 
 
 
 
 
 
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
c
x
}
 
c
y
=
{
c
y
}
 
r
=
{
r
}
 
s
t
r
o
k
e
=
{
M
U
T
E
D
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
3
 
4
"
 
/
>




 
 
 
 
 
 
{
/
*
 
k
e
y
s
 
*
/
}


 
 
 
 
 
 
{
K
E
Y
S
.
m
a
p
(
(
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
 
a
s
s
i
g
n
m
e
n
t
 
=
 
k
e
y
A
s
s
i
g
n
m
e
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
a
)
 
=
>
 
a
.
k
e
y
I
d
 
=
=
=
 
k
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
 
c
 
=
 
a
s
s
i
g
n
m
e
n
t
 
?
 
c
o
l
o
r
F
o
r
(
a
s
s
i
g
n
m
e
n
t
.
s
h
a
r
d
I
d
)
 
:
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
i
m
 
=
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
 
!
=
=
 
n
u
l
l
 
&
&
 
a
s
s
i
g
n
m
e
n
t
?
.
s
h
a
r
d
I
d
 
!
=
=
 
h
i
g
h
l
i
g
h
t
S
h
a
r
d
I
d
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
l
a
r
(
k
.
a
n
g
l
e
,
 
r
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
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
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
0
b
1
2
2
0
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
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
c
x
:
 
p
.
x
,
 
c
y
:
 
p
.
y
,
 
o
p
a
c
i
t
y
:
 
d
i
m
 
?
 
0
.
2
5
 
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
1
8
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
{
/
*
 
s
h
a
r
d
s
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
s
h
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
l
a
r
(
s
.
a
n
g
l
e
,
 
r
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
c
o
l
o
r
F
o
r
(
s
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
m
o
t
i
o
n
.
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
:
 
1
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
s
c
a
l
e
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
2
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
}
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
1
}
 
f
i
l
l
=
{
c
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
0
b
1
2
2
0
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
 
-
 
1
8
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
i
l
l
=
{
c
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
{
1
1
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
{
7
0
0
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
M
O
N
O
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
d
.
r
e
p
l
a
c
e
(
"
s
h
a
r
d
-
"
,
 
"
"
)
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
m
o
t
i
o
n
.
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
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
 
d
e
s
c
r
i
b
e
A
r
c
(
c
x
:
 
n
u
m
b
e
r
,
 
c
y
:
 
n
u
m
b
e
r
,
 
r
:
 
n
u
m
b
e
r
,
 
s
t
a
r
t
A
n
g
l
e
:
 
n
u
m
b
e
r
,
 
e
n
d
A
n
g
l
e
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
p
o
l
a
r
 
=
 
(
a
n
g
l
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
 
{


 
 
 
 
c
o
n
s
t
 
r
a
d
 
=
 
(
(
a
n
g
l
e
 
-
 
9
0
)
 
*
 
M
a
t
h
.
P
I
)
 
/
 
1
8
0
;


 
 
 
 
r
e
t
u
r
n
 
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
r
a
d
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
r
a
d
)
 
}
;


 
 
}
;


 
 
c
o
n
s
t
 
s
t
a
r
t
 
=
 
p
o
l
a
r
(
s
t
a
r
t
A
n
g
l
e
)
;


 
 
c
o
n
s
t
 
e
n
d
 
=
 
p
o
l
a
r
(
e
n
d
A
n
g
l
e
)
;


 
 
c
o
n
s
t
 
s
w
e
e
p
 
=
 
e
n
d
A
n
g
l
e
 
-
 
s
t
a
r
t
A
n
g
l
e
;


 
 
c
o
n
s
t
 
l
a
r
g
e
A
r
c
 
=
 
s
w
e
e
p
 
>
 
1
8
0
 
?
 
1
 
:
 
0
;


 
 
r
e
t
u
r
n
 
`
M
 
$
{
s
t
a
r
t
.
x
}
 
$
{
s
t
a
r
t
.
y
}
 
A
 
$
{
r
}
 
$
{
r
}
 
0
 
$
{
l
a
r
g
e
A
r
c
}
 
1
 
$
{
e
n
d
.
x
}
 
$
{
e
n
d
.
y
}
`
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
R
o
u
t
i
n
g
 
a
 
k
e
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
S
A
M
P
L
E
_
K
E
Y
S
 
=
 
[
"
u
s
e
r
:
4
2
"
,
 
"
u
s
e
r
:
9
9
"
,
 
"
u
s
e
r
:
1
0
2
4
"
,
 
"
u
s
e
r
:
7
"
,
 
"
u
s
e
r
:
5
1
2
"
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
 
R
o
u
t
i
n
g
D
e
m
o
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
(
0
)
;




 
 
c
o
n
s
t
 
k
e
y
 
=
 
S
A
M
P
L
E
_
K
E
Y
S
[
p
i
c
k
e
d
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
h
 
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
 
s
t
a
b
l
e
H
a
s
h
(
k
e
y
)
,
 
[
k
e
y
]
)
;


 
 
c
o
n
s
t
 
s
h
a
r
d
I
d
x
 
=
 
h
a
s
h
 
%
 
4
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
H
o
w
 
a
 
k
e
y
 
r
e
a
c
h
e
s
 
i
t
s
 
s
h
a
r
d
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
r
o
u
t
e
r
 
i
s
 
a
 
s
m
a
l
l
,
 
d
u
m
b
 
f
u
n
c
t
i
o
n
.
 
<
c
o
d
e
 
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
F
a
m
i
l
y
:
 
M
O
N
O
 
}
}
>
s
h
a
r
d
 
=
 
h
a
s
h
(
k
e
y
)
 
m
o
d
 
N
<
/
c
o
d
e
>
.


 
 
 
 
 
 
 
 
I
t
 
r
u
n
s
 
o
n
 
e
v
e
r
y
 
r
e
a
d
 
a
n
d
 
w
r
i
t
e
.
 
P
i
c
k
 
a
 
k
e
y
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
p
a
t
h
 
l
i
g
h
t
 
u
p
.


 
 
 
 
 
 
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
 
m
b
-
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
S
A
M
P
L
E
_
K
E
Y
S
.
m
a
p
(
(
k
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
c
t
i
v
e
 
=
 
i
 
=
=
=
 
p
i
c
k
e
d
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
k
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
i
)
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
 
M
O
N
O
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
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
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
1
8
`
 
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
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
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
a
l
l
 
0
.
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
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
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
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
"
0
 
0
 
7
2
0
 
2
2
0
"
 
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
W
i
d
t
h
:
 
7
6
0
,
 
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
/
*
 
b
a
s
e
 
p
a
t
h
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
5
0
}
 
y
1
=
{
1
1
0
}
 
x
2
=
{
2
5
0
}
 
y
2
=
{
1
1
0
}
 
s
t
r
o
k
e
=
{
M
U
T
E
D
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
l
i
n
e
 
x
1
=
{
3
5
0
}
 
y
1
=
{
1
1
0
}
 
x
2
=
{
5
0
0
}
 
y
2
=
{
1
1
0
}
 
s
t
r
o
k
e
=
{
M
U
T
E
D
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


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
,
 
3
]
.
m
a
p
(
(
i
)
 
=
>
 
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
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
5
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
1
1
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
6
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
3
0
 
+
 
i
 
*
 
5
0
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
 
=
=
=
 
s
h
a
r
d
I
d
x
 
?
 
S
D
 
:
 
M
U
T
E
D
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
 
=
=
=
 
s
h
a
r
d
I
d
x
 
?
 
2
 
:
 
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
{
i
 
=
=
=
 
s
h
a
r
d
I
d
x
 
?
 
"
0
"
 
:
 
"
4
 
4
"
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
n
i
m
a
t
e
d
 
p
a
c
k
e
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
k
t
-
$
{
p
i
c
k
e
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
c
x
:
 
5
0
,
 
c
y
:
 
1
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
c
x
:
 
[
5
0
,
 
2
5
0
,
 
2
5
0
,
 
5
0
0
,
 
5
0
0
,
 
6
5
0
]
,
 
c
y
:
 
[
1
1
0
,
 
1
1
0
,
 
1
1
0
,
 
1
1
0
,
 
1
1
0
,
 
3
0
 
+
 
s
h
a
r
d
I
d
x
 
*
 
5
0
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
.
6
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
,
 
t
i
m
e
s
:
 
[
0
,
 
0
.
2
5
,
 
0
.
4
5
,
 
0
.
7
,
 
0
.
7
8
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
n
o
d
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
R
o
u
t
e
N
o
d
e
 
x
=
{
2
0
}
 
y
=
{
8
5
}
 
w
=
{
6
0
}
 
l
a
b
e
l
=
"
k
e
y
"
 
s
u
b
=
{
k
e
y
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
R
o
u
t
e
N
o
d
e
 
x
=
{
2
5
0
}
 
y
=
{
8
5
}
 
w
=
{
1
0
0
}
 
l
a
b
e
l
=
"
h
a
s
h
(
)
"
 
s
u
b
=
{
h
a
s
h
.
t
o
S
t
r
i
n
g
(
1
6
)
.
s
l
i
c
e
(
0
,
 
8
)
}
 
c
o
l
o
r
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
R
o
u
t
e
N
o
d
e
 
x
=
{
5
0
0
}
 
y
=
{
8
5
}
 
w
=
{
5
0
}
 
l
a
b
e
l
=
"
m
o
d
 
4
"
 
s
u
b
=
{
S
t
r
i
n
g
(
s
h
a
r
d
I
d
x
)
}
 
c
o
l
o
r
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




 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
,
 
3
]
.
m
a
p
(
(
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
u
t
e
N
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
6
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
5
 
+
 
i
 
*
 
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
=
{
6
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
{
`
s
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
=
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
i
 
=
=
=
 
s
h
a
r
d
I
d
x
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
a
c
t


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
i
c
k
e
d
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
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
r
g
i
n
T
o
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
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
 
M
O
N
O
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
8
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
N
E
U
T
R
A
L
 
}
}
>
/
/
 
r
o
u
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
b
r
 
/
>


 
 
 
 
 
 
 
 
 
 
s
h
a
r
d
 
=
 
h
a
s
h
(
<
s
p
a
n
 
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
 
S
D
 
}
}
>
{
k
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
)
 
%
 
4
 
=
 
<
s
p
a
n
 
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
 
"
#
1
0
b
9
8
1
"
 
}
}
>
{
s
h
a
r
d
I
d
x
}
<
/
s
p
a
n
>
 
&
n
b
s
p
;
→
&
n
b
s
p
;
 
s
{
s
h
a
r
d
I
d
x
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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




f
u
n
c
t
i
o
n
 
R
o
u
t
e
N
o
d
e
(
{
 
x
,
 
y
,
 
w
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
,
 
c
o
m
p
a
c
t
 
}
:
 
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
 
w
:
 
n
u
m
b
e
r
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
 
s
u
b
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
c
o
m
p
a
c
t
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


 
 
c
o
n
s
t
 
h
 
=
 
c
o
m
p
a
c
t
 
?
 
4
0
 
:
 
5
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
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
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
}
 
r
x
=
{
6
}
 
f
i
l
l
=
{
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
w
 
/
 
2
}
 
y
=
{
c
o
m
p
a
c
t
 
?
 
2
4
 
:
 
2
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
i
l
l
=
"
#
e
5
e
7
e
b
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
{
c
o
m
p
a
c
t
 
?
 
1
2
 
:
 
1
1
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
{
7
0
0
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
M
O
N
O
}
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
t
e
x
t
>


 
 
 
 
 
 
{
!
c
o
m
p
a
c
t
 
&
&
 
s
u
b
 
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
w
 
/
 
2
}
 
y
=
{
3
8
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
 
f
o
n
t
S
i
z
e
=
{
9
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
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
{
s
u
b
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




/
/
 
t
i
n
y
 
s
t
a
b
l
e
 
h
a
s
h
,
 
n
o
t
 
c
r
y
p
t
o


f
u
n
c
t
i
o
n
 
s
t
a
b
l
e
H
a
s
h
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
 
{


 
 
l
e
t
 
h
 
=
 
2
1
6
6
1
3
6
2
6
1
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


 
 
 
 
h
 
^
=
 
s
.
c
h
a
r
C
o
d
e
A
t
(
i
)
;


 
 
 
 
h
 
=
 
(
h
 
*
 
1
6
7
7
7
6
1
9
)
 
>
>
>
 
0
;


 
 
}


 
 
r
e
t
u
r
n
 
h
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
H
o
t
 
s
h
a
r
d
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
S
h
a
r
d
L
o
a
d
 
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


 
 
r
p
s
:
 
n
u
m
b
e
r
;


 
 
h
o
t
:
 
b
o
o
l
e
a
n
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
 
H
o
t
S
h
a
r
d
s
(
)
 
{


 
 
c
o
n
s
t
 
[
s
c
e
n
a
r
i
o
,
 
s
e
t
S
c
e
n
a
r
i
o
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
e
v
e
n
"
 
|
 
"
c
e
l
e
b
r
i
t
y
"
 
|
 
"
f
i
x
e
d
"
>
(
"
e
v
e
n
"
)
;




 
 
c
o
n
s
t
 
s
h
a
r
d
s
:
 
S
h
a
r
d
L
o
a
d
[
]
 
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


 
 
 
 
i
f
 
(
s
c
e
n
a
r
i
o
 
=
=
=
 
"
e
v
e
n
"
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
0
"
,
 
r
p
s
:
 
1
2
0
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
1
"
,
 
r
p
s
:
 
1
1
8
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
2
"
,
 
r
p
s
:
 
1
2
4
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
3
"
,
 
r
p
s
:
 
1
1
9
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
]
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
c
e
n
a
r
i
o
 
=
=
=
 
"
c
e
l
e
b
r
i
t
y
"
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
0
"
,
 
r
p
s
:
 
8
5
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
1
"
,
 
r
p
s
:
 
1
2
0
0
0
,
 
h
o
t
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
2
"
,
 
r
p
s
:
 
8
7
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
s
3
"
,
 
r
p
s
:
 
8
2
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
]
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
s
0
"
,
 
r
p
s
:
 
2
4
0
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
s
1
"
,
 
r
p
s
:
 
4
8
0
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
s
2
"
,
 
r
p
s
:
 
2
3
0
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
s
3
"
,
 
r
p
s
:
 
2
5
0
0
,
 
h
o
t
:
 
f
a
l
s
e
 
}
,


 
 
 
 
]
;


 
 
}
,
 
[
s
c
e
n
a
r
i
o
]
)
;




 
 
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
s
h
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
)
 
=
>
 
s
.
r
p
s
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
h
a
r
d
i
n
g
 
d
o
e
s
n
&
r
s
q
u
o
;
t
 
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
 
s
k
e
w
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
E
v
e
n
 
w
i
t
h
 
c
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
,
 
r
e
a
l
 
w
o
r
k
l
o
a
d
s
 
a
r
e
n
&
r
s
q
u
o
;
t
 
u
n
i
f
o
r
m
.
 
O
n
e
 
c
e
l
e
b
r
i
t
y
 
u
s
e
r
,
 
o
n
e


 
 
 
 
 
 
 
 
v
i
r
a
l
 
p
r
o
d
u
c
t
,
 
o
n
e
 
B
l
a
c
k
 
F
r
i
d
a
y
 
S
K
U
 
a
n
d
 
a
 
s
i
n
g
l
e
 
s
h
a
r
d
 
a
b
s
o
r
b
s
 
a
l
l
 
t
h
e
 
t
r
a
f
f
i
c
.
 
W
a
t
c
h
 
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
.


 
 
 
 
 
 
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
 
m
b
-
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
[


 
 
 
 
 
 
 
 
 
 
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
 
t
r
a
f
f
i
c
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
c
e
l
e
b
r
i
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
C
e
l
e
b
r
i
t
y
 
u
s
e
r
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
d
:
 
"
f
i
x
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
A
f
t
e
r
 
f
i
x
 
(
s
p
l
i
t
 
k
e
y
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
s
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
c
t
i
v
e
 
=
 
s
c
e
n
a
r
i
o
 
=
=
=
 
s
.
i
d
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
s
.
i
d
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
 
s
e
t
S
c
e
n
a
r
i
o
(
s
.
i
d
 
a
s
 
t
y
p
e
o
f
 
s
c
e
n
a
r
i
o
)
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
 
M
O
N
O
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
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
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
1
8
`
 
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
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
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
a
l
l
 
0
.
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
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
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
s
h
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
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
1
0
0
,
 
(
s
.
r
p
s
 
/
 
m
a
x
)
 
*
 
1
0
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
s
.
h
o
t
 
?
 
S
D
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
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
g
r
i
d
"
,
 
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
6
0
p
x
 
1
f
r
 
1
1
0
p
x
"
,
 
a
l
i
g
n
I
t
e
m
s
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
 
g
a
p
:
 
1
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
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
 
g
a
p
:
 
6
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
 
M
O
N
O
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
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
h
o
t
 
&
&
 
<
F
l
a
m
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
3
.
5
 
h
-
3
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
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
d
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
 
2
8
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
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
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
 
`
$
{
p
c
t
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
1
0
0
%
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
 
c
,
 
o
p
a
c
i
t
y
:
 
0
.
8
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
h
o
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
0
.
9
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
r
e
p
e
a
t
T
y
p
e
:
 
"
r
e
v
e
r
s
e
"
 
}
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
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
i
n
s
e
t
:
 
0
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
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
9
0
d
e
g
,
 
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
 
0
%
,
 
$
{
S
D
}
3
3
 
5
0
%
,
 
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
 
1
0
0
%
)
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
O
N
O
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
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
c
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
r
i
g
h
t
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
r
p
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
 
r
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
c
e
n
a
r
i
o
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
r
g
i
n
T
o
p
:
 
1
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
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
8
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
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
6
6
r
e
m
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
E
N
A
R
I
O


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
e
n
a
r
i
o
 
=
=
=
 
"
e
v
e
n
"
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
E
a
c
h
 
s
h
a
r
d
 
t
a
k
e
s
 
r
o
u
g
h
l
y
 
t
h
e
 
s
a
m
e
 
l
o
a
d
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
 
f
i
c
t
i
o
n
 
e
v
e
r
y
 
t
e
x
t
b
o
o
k
 
s
t
a
r
t
s
 
w
i
t
h
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
e
n
a
r
i
o
 
=
=
=
 
"
c
e
l
e
b
r
i
t
y
"
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
O
n
e
 
k
e
y
 
(
a
 
c
e
l
e
b
r
i
t
y
,
 
a
 
v
i
r
a
l
 
S
K
U
,
 
a
 
p
o
p
u
l
a
r
 
h
a
s
h
t
a
g
)
 
l
i
v
e
s
 
o
n
 
s
h
a
r
d
 
s
1
.
 
T
h
a
t
 
s
h
a
r
d
 
i
s
 
a
t
 
1
0
x
 
t
h
e
 
l
o
a
d
 
o
f
 
e
v
e
r
y
 
o
t
h
e
r
.
 
C
P
U
 
p
e
g
s
,
 
l
a
t
e
n
c
y
 
s
p
i
k
e
s
,
 
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
 
c
l
u
s
t
e
r
 
i
s
 
b
o
r
e
d
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
e
n
a
r
i
o
 
=
=
=
 
"
f
i
x
e
d
"
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
F
i
x
:
 
s
p
l
i
t
 
t
h
e
 
h
o
t
 
k
e
y
 
a
c
r
o
s
s
 
m
u
l
t
i
p
l
e
 
s
h
a
r
d
s
 
(
c
o
m
p
o
s
i
t
e
 
k
e
y
,
 
v
i
r
t
u
a
l
 
b
u
c
k
e
t
s
,
 
w
r
i
t
e
 
f
a
n
-
o
u
t
)
.
 
L
o
a
d
 
i
s
 
m
o
r
e
 
e
v
e
n
 
b
u
t
 
y
o
u
'
v
e
 
a
d
d
e
d
 
a
 
l
a
y
e
r
 
o
f
 
i
n
d
i
r
e
c
t
i
o
n
 
o
n
 
e
v
e
r
y
 
r
e
a
d
.
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
3
_
S
h
a
r
d
i
n
g
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
r
i
n
g
"
,
 
l
a
b
e
l
:
 
"
H
a
s
h
 
R
i
n
g
"
,
 
i
c
o
n
:
 
<
C
i
r
c
l
e
D
o
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
H
a
s
h
R
i
n
g
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
o
u
t
i
n
g
"
,
 
l
a
b
e
l
:
 
"
R
o
u
t
i
n
g
"
,
 
i
c
o
n
:
 
<
H
a
s
h
 
c
l
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
R
o
u
t
i
n
g
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
h
o
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
H
o
t
 
S
h
a
r
d
s
"
,
 
i
c
o
n
:
 
<
A
c
t
i
v
i
t
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
H
o
t
S
h
a
r
d
s
 
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
 
E
n
g
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
y
 
i
s
 
c
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
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
 
`
h
a
s
h
(
k
e
y
)
 
%
 
n
`
 
f
o
r
 
s
h
a
r
d
i
n
g
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
 
p
r
o
d
u
c
e
s
 
m
o
r
e
 
u
n
i
f
o
r
m
 
l
o
a
d
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
i
n
g
 
o
r
 
r
e
m
o
v
i
n
g
 
a
 
s
h
a
r
d
 
m
o
v
e
s
 
o
n
l
y
 
a
 
s
m
a
l
l
 
f
r
a
c
t
i
o
n
 
o
f
 
k
e
y
s
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
s
u
p
p
o
r
t
s
 
m
o
r
e
 
k
e
y
s
 
p
e
r
 
s
h
a
r
d
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
f
a
s
t
e
r
 
t
o
 
c
o
m
p
u
t
e
.
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
i
t
h
 
`
%
 
n
`
,
 
c
h
a
n
g
i
n
g
 
n
 
c
h
a
n
g
e
s
 
a
l
m
o
s
t
 
e
v
e
r
y
 
k
e
y
'
s
 
h
o
m
e
.
 
C
o
n
s
i
s
t
e
n
t
 
h
a
s
h
i
n
g
 
o
n
l
y
 
m
o
v
e
s
 
k
e
y
s
 
i
n
 
t
h
e
 
n
e
w
 
n
o
d
e
'
s
 
a
r
c
.
 
T
h
e
 
w
h
o
l
e
 
p
o
i
n
t
 
i
s
 
c
h
e
a
p
 
o
n
l
i
n
e
 
r
e
b
a
l
a
n
c
i
n
g
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
r
 
c
l
u
s
t
e
r
 
s
h
a
r
d
s
 
b
y
 
u
s
e
r
_
i
d
.
 
A
 
c
e
l
e
b
r
i
t
y
 
g
e
t
s
 
5
0
%
 
o
f
 
a
l
l
 
r
e
a
d
s
.
 
W
h
i
c
h
 
f
i
x
 
p
r
e
s
e
r
v
e
s
 
s
h
a
r
d
i
n
g
 
s
c
a
l
e
-
o
u
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
o
v
e
 
t
h
a
t
 
u
s
e
r
 
t
o
 
a
 
d
e
d
i
c
a
t
e
d
 
s
h
a
r
d
 
w
i
t
h
 
e
x
t
r
a
 
c
a
p
a
c
i
t
y
 
(
o
r
 
v
i
r
t
u
a
l
 
b
u
c
k
e
t
s
)
.
"
,


 
 
 
 
 
 
 
 
"
S
t
o
p
 
s
h
a
r
d
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
I
n
c
r
e
a
s
e
 
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
 
s
h
a
r
d
s
.
"
,


 
 
 
 
 
 
 
 
"
S
w
i
t
c
h
 
t
o
 
a
 
s
i
n
g
l
e
 
p
r
i
m
a
r
y
 
d
a
t
a
b
a
s
e
.
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
H
o
t
 
k
e
y
s
 
a
r
e
 
a
n
 
i
n
h
e
r
e
n
t
 
r
i
s
k
 
o
f
 
s
h
a
r
d
i
n
g
 
b
y
 
e
n
t
i
t
y
.
 
T
h
e
 
f
i
x
 
i
s
 
p
e
r
-
k
e
y
:
 
p
e
e
l
 
t
h
e
 
c
e
l
e
b
r
i
t
y
 
o
f
f
 
o
n
t
o
 
m
o
r
e
 
c
a
p
a
c
i
t
y
,
 
o
r
 
f
a
n
-
o
u
t
 
r
e
a
d
s
 
a
c
r
o
s
s
 
v
i
r
t
u
a
l
 
s
u
b
-
s
h
a
r
d
s
.
 
J
u
s
t
 
a
d
d
i
n
g
 
s
h
a
r
d
s
 
d
o
e
s
n
'
t
 
h
e
l
p
 
i
f
 
t
h
e
 
s
a
m
e
 
u
s
e
r
 
s
t
i
l
l
 
m
a
p
s
 
t
o
 
o
n
e
 
o
f
 
t
h
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
S
h
a
r
d
i
n
g
 
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
 
w
r
i
t
e
 
t
h
r
o
u
g
h
p
u
t
 
b
y
 
N
 
(
t
h
e
 
s
h
a
r
d
 
c
o
u
n
t
)
 
p
r
i
m
a
r
i
l
y
 
b
e
c
a
u
s
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
W
r
i
t
e
s
 
a
r
e
 
s
m
a
l
l
e
r
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
w
r
i
t
e
 
o
n
l
y
 
t
o
u
c
h
e
s
 
o
n
e
 
s
h
a
r
d
,
 
a
n
d
 
s
h
a
r
d
s
 
r
u
n
 
i
n
d
e
p
e
n
d
e
n
t
l
y
 
i
n
 
p
a
r
a
l
l
e
l
.
"
,


 
 
 
 
 
 
 
 
"
W
r
i
t
e
s
 
a
r
e
 
b
a
t
c
h
e
d
.
"
,


 
 
 
 
 
 
 
 
"
S
h
a
r
d
i
n
g
 
c
o
m
p
r
e
s
s
e
s
 
d
a
t
a
.
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
 
s
h
a
r
d
 
i
s
 
a
 
f
u
l
l
y
 
i
n
d
e
p
e
n
d
e
n
t
 
d
a
t
a
b
a
s
e
.
 
W
r
i
t
e
s
 
f
o
r
 
d
i
f
f
e
r
e
n
t
 
k
e
y
s
 
l
a
n
d
 
o
n
 
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
h
a
r
d
s
 
a
n
d
 
e
x
e
c
u
t
e
 
i
n
 
p
a
r
a
l
l
e
l
,
 
s
o
 
t
o
t
a
l
 
c
l
u
s
t
e
r
 
w
r
i
t
e
 
t
h
r
o
u
g
h
p
u
t
 
s
c
a
l
e
s
 
c
l
o
s
e
 
t
o
 
l
i
n
e
a
r
l
y
 
w
i
t
h
 
N
 
(
u
n
t
i
l
 
y
o
u
 
h
i
t
 
c
r
o
s
s
-
s
h
a
r
d
 
t
r
a
n
s
a
c
t
i
o
n
s
 
o
r
 
h
o
t
 
k
e
y
s
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
 
o
f
 
t
h
e
s
e
 
i
s
 
h
a
r
d
e
s
t
 
i
n
 
a
 
s
h
a
r
d
e
d
 
s
y
s
t
e
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
R
e
a
d
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
 
u
s
e
r
'
s
 
p
r
o
f
i
l
e
.
"
,


 
 
 
 
 
 
 
 
"
A
 
t
r
a
n
s
a
c
t
i
o
n
 
t
h
a
t
 
u
p
d
a
t
e
s
 
t
w
o
 
u
s
e
r
s
 
o
n
 
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
h
a
r
d
s
 
a
t
o
m
i
c
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
i
n
g
 
a
 
n
e
w
 
s
h
a
r
d
.
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
i
n
g
 
r
e
a
d
s
.
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
C
r
o
s
s
-
s
h
a
r
d
 
t
r
a
n
s
a
c
t
i
o
n
s
 
n
e
e
d
 
a
 
c
o
o
r
d
i
n
a
t
o
r
 
a
n
d
 
e
i
t
h
e
r
 
t
w
o
-
p
h
a
s
e
 
c
o
m
m
i
t
 
o
r
 
s
a
g
a
s
,
 
b
o
t
h
 
o
f
 
w
h
i
c
h
 
a
r
e
 
s
l
o
w
 
a
n
d
 
c
o
m
p
l
i
c
a
t
e
d
.
 
M
o
s
t
 
s
h
a
r
d
e
d
 
s
y
s
t
e
m
s
 
t
r
y
 
t
o
 
d
e
s
i
g
n
 
t
h
e
 
d
a
t
a
 
m
o
d
e
l
 
s
o
 
t
r
a
n
s
a
c
t
i
o
n
s
 
s
t
a
y
 
o
n
 
o
n
e
 
s
h
a
r
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
E
n
g
i
n
e
e
r
i
n
g
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
S
h
a
r
d
i
n
g
 
&
 
P
a
r
t
i
t
i
o
n
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
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
T
h
e
 
s
t
a
n
d
a
r
d
 
'
h
o
w
 
d
o
 
y
o
u
 
s
c
a
l
e
 
w
r
i
t
e
s
 
p
a
s
t
 
o
n
e
 
D
B
'
 
a
n
s
w
e
r
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


